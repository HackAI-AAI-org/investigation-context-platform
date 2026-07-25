import { McpApp, Module, ConfigModule } from '@nitrostack/core';

import { PizzazModule } from './modules/pizzaz/pizzaz.module.js';
import { InvestigationModule } from './modules/investigation/investigation.module.js';
import { EvidenceModule } from './modules/evidence/evidence.module.js';
import { EntityModule } from './modules/entities/entities.module.js';
import { RelationshipModule } from './modules/relationship/relationship.module.js';
import { NotesModule } from './modules/notes/notes.module.js';
import { TasksModule } from './modules/tasks/tasks.module.js';
import { SearchModule } from './modules/search/search.module.js';
import { ReportsModule } from './modules/reports/reports.module.js';

/**
 * Root Application Module
 */
@McpApp({
    module: AppModule,
    server: {
        name: 'pizzaz-finder',
        version: '1.0.0'
    },
    logging: {
        level: 'info'
    }
})
@Module({
    name: 'pizzaz',
    description: 'Pizza shop finder with interactive maps',
    imports: [
        ConfigModule.forRoot(),

        PizzazModule,

        InvestigationModule,
        EvidenceModule,
        EntityModule,
        RelationshipModule,
        NotesModule,
        TasksModule,
        SearchModule,
        ReportsModule
    ],
})
export class AppModule {}