import { Injectable, OnModuleInit } from "@nestjs/common";
import { PrismaClient } from "@prisma/client";
import logger from 'moment-logger'

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {

    async onModuleInit() {
        logger.log('Connecting to the database........ ')
        await this.$connect();
        logger.log('Connected to the database.')
    }

}