import { Module } from '@nestjs/common';
import {
  CloudFormationService,
  FileSystemService,
  NpmService,
} from '../core/services';

@Module({
  providers: [CloudFormationService, FileSystemService, NpmService],
  exports: [CloudFormationService, FileSystemService, NpmService],
})
export class DeployToolsModule {}
