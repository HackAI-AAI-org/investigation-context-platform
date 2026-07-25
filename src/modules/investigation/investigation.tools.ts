import {
    ToolDecorator as Tool,
    ExecutionContext,
    Injectable,
    z,
} from "@nitrostack/core";
import { InvestigationService } from "./investigation.service.js";

const ShowInvestigationsSchema = z.object({
    status: z
        .enum(["Open", "In Progress", "Resolved"])
        .optional()
        .describe("Filter investigations by status"),
});

const ShowInvestigationSchema = z.object({
    investigationId: z
        .string()
        .describe("ID of the investigation"),
});

@Injectable({ deps: [InvestigationService] })
export class InvestigationTools {
    constructor(
        private readonly investigationService: InvestigationService
    ) {}

    @Tool({
        name: "show_investigations",
        description: "Display all investigations or filter them by status.",
        inputSchema: ShowInvestigationsSchema,
    })
    async showInvestigations(
        args: z.infer<typeof ShowInvestigationsSchema>,
        ctx: ExecutionContext
    ) {
        const investigations = args.status
            ? this.investigationService.getInvestigationsByStatus(args.status)
            : this.investigationService.getAllInvestigations();

        ctx.logger.info("Showing investigations", {
            total: investigations.length,
        });

        return {
            investigations,
            total: investigations.length,
        };
    }

    @Tool({
        name: "show_investigation",
        description: "Display details of a specific investigation.",
        inputSchema: ShowInvestigationSchema,
    })
    async showInvestigation(
        args: z.infer<typeof ShowInvestigationSchema>,
        ctx: ExecutionContext
    ) {
        const investigation =
            this.investigationService.getInvestigationById(
                args.investigationId
            );

        if (!investigation) {
            throw new Error("Investigation not found");
        }

        ctx.logger.info("Showing investigation", {
            id: investigation.id,
        });

        return {
            investigation,
        };
    }
}