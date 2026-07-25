import { Injectable } from "@nitrostack/core";

import {
    Evidence,
    Investigation,
    INVESTIGATIONS,
    Note,
    TimelineEvent,
} from "./investigation.data.js";

@Injectable()
export class InvestigationService {
    getAllInvestigations(): Investigation[] {
        return INVESTIGATIONS;
    }

    getInvestigationById(id: string): Investigation | undefined {
        return INVESTIGATIONS.find(
            (investigation) => investigation.id === id
        );
    }

    getInvestigationsByStatus(
        status: Investigation["status"]
    ): Investigation[] {
        return INVESTIGATIONS.filter(
            (investigation) => investigation.status === status
        );
    }

    getCriticalInvestigations(): Investigation[] {
        return INVESTIGATIONS.filter(
            (investigation) => investigation.severity === "Critical"
        );
    }

    searchInvestigations(query: string): Investigation[] {
        const search = query.toLowerCase();

        return INVESTIGATIONS.filter((investigation) => {
            return (
                investigation.id.toLowerCase().includes(search) ||
                investigation.title.toLowerCase().includes(search) ||
                investigation.description.toLowerCase().includes(search) ||
                investigation.assignedTo.toLowerCase().includes(search) ||
                investigation.attackTechnique
                    .toLowerCase()
                    .includes(search) ||
                investigation.tags.some((tag) =>
                    tag.toLowerCase().includes(search)
                )
            );
        });
    }

    assignInvestigation(
        id: string,
        analyst: string
    ): Investigation {
        const investigation = this.getInvestigationById(id);

        if (!investigation) {
            throw new Error("Investigation not found.");
        }

        investigation.assignedTo = analyst;

        investigation.timeline.push({
            id: this.generateTimelineId(),
            timestamp: new Date().toISOString(),
            event: `Assigned to ${analyst}.`,
        });

        return investigation;
    }

    updateStatus(
        id: string,
        status: Investigation["status"]
    ): Investigation {
        const investigation = this.getInvestigationById(id);

        if (!investigation) {
            throw new Error("Investigation not found.");
        }

        investigation.status = status;

        investigation.timeline.push({
            id: this.generateTimelineId(),
            timestamp: new Date().toISOString(),
            event: `Status updated to "${status}".`,
        });

        return investigation;
    }

    addNote(
        investigationId: string,
        author: string,
        content: string
    ): Note {
        const investigation =
            this.getInvestigationById(investigationId);

        if (!investigation) {
            throw new Error("Investigation not found.");
        }

        const note: Note = {
            id: this.generateNoteId(),
            author,
            content,
            createdAt: new Date().toISOString(),
        };

        investigation.notes.push(note);

        investigation.timeline.push({
            id: this.generateTimelineId(),
            timestamp: new Date().toISOString(),
            event: `${author} added an investigation note.`,
        });

        return note;
    }

    addEvidence(
        investigationId: string,
        evidence: Omit<Evidence, "id">
    ): Evidence {
        const investigation =
            this.getInvestigationById(investigationId);

        if (!investigation) {
            throw new Error("Investigation not found.");
        }

        const newEvidence: Evidence = {
            id: this.generateEvidenceId(),
            ...evidence,
        };

        investigation.evidence.push(newEvidence);

        investigation.timeline.push({
            id: this.generateTimelineId(),
            timestamp: new Date().toISOString(),
            event: `Evidence "${newEvidence.name}" attached.`,
        });

        return newEvidence;
    }

    addTimelineEvent(
        investigationId: string,
        event: string
    ): TimelineEvent {
        const investigation =
            this.getInvestigationById(investigationId);

        if (!investigation) {
            throw new Error("Investigation not found.");
        }

        const timelineEvent: TimelineEvent = {
            id: this.generateTimelineId(),
            timestamp: new Date().toISOString(),
            event,
        };

        investigation.timeline.push(timelineEvent);

        return timelineEvent;
    }

    createInvestigation(
        investigation: Omit<Investigation, "id">
    ): Investigation {
        const newInvestigation: Investigation = {
            id: this.generateInvestigationId(),
            ...investigation,
        };

        INVESTIGATIONS.push(newInvestigation);

        return newInvestigation;
    }

    private generateInvestigationId(): string {
        return `INV-${String(
            INVESTIGATIONS.length + 1
        ).padStart(3, "0")}`;
    }

    private generateEvidenceId(): string {
        const totalEvidence = INVESTIGATIONS.reduce(
            (count, investigation) =>
                count + investigation.evidence.length,
            0
        );

        return `EV-${String(totalEvidence + 1).padStart(3, "0")}`;
    }

    private generateNoteId(): string {
        const totalNotes = INVESTIGATIONS.reduce(
            (count, investigation) =>
                count + investigation.notes.length,
            0
        );

        return `NOTE-${String(totalNotes + 1).padStart(3, "0")}`;
    }

    private generateTimelineId(): string {
        const totalEvents = INVESTIGATIONS.reduce(
            (count, investigation) =>
                count + investigation.timeline.length,
            0
        );

        return `TIME-${String(totalEvents + 1).padStart(3, "0")}`;
    }
}