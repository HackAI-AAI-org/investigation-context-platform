import { Injectable } from "@nitrostack/core";
import {
    Investigation,
    INVESTIGATIONS,
} from "./investigation.data.js";

@Injectable()
export class InvestigationService {
    getAllInvestigations(): Investigation[] {
        return INVESTIGATIONS;
    }

    getInvestigationById(id: string): Investigation | undefined {
        return INVESTIGATIONS.find((i) => i.id === id);
    }

    getInvestigationsByStatus(
        status: Investigation["status"]
    ): Investigation[] {
        return INVESTIGATIONS.filter(
            (i) => i.status === status
        );
    }

    getCriticalInvestigations(): Investigation[] {
        return INVESTIGATIONS.filter(
            (i) => i.severity === "Critical"
        );
    }

    createInvestigation(
        investigation: Omit<Investigation, "id">
    ): Investigation {
        const newInvestigation: Investigation = {
            id: `INV-${String(INVESTIGATIONS.length + 1).padStart(3, "0")}`,
            ...investigation,
        };

        INVESTIGATIONS.push(newInvestigation);

        return newInvestigation;
    }
}