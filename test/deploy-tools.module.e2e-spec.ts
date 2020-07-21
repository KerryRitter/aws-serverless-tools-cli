import { Test, TestingModule } from '@nestjs/testing';
import { DeployToolsModule } from './../src/deploy-tools/deploy-tools.module';
import { NpmService } from '../src/core';

describe('DeployToolsModule (e2e)', () => {
  it('should let me get core services', async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [DeployToolsModule],
    }).compile();
    
    expect(moduleFixture.get(NpmService)).toBeTruthy();
  });
});
