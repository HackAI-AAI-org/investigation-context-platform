import {
    ToolDecorator as Tool,
    ExecutionContext,
    Injectable,
    z,
} from "@nitrostack/core";

import { InvestigationService } from "./investigation.service.js";

const AuditSchema = z.object({});

@Injectable({ deps: [InvestigationService] })
export class InvestigationTaskTools {
    constructor(
        private readonly investigationService: InvestigationService
    ) {}

    @Tool({
        name: "audit_investigations",
        description: "Audit all investigations.",
        inputSchema: AuditSchema,
    })
    async auditInvestigations(
        args: z.infer<typeof AuditSchema>,
        ctx: ExecutionContext
    ) {
        const investigations =
            this.investigationService.getAllInvestigations();

        ctx.logger.info("Auditing investigations", {
            total: investigations.length,
        });

        return {
            total: investigations.length,
            investigations,
        };
    }
}