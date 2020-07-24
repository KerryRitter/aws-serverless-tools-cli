import { Test, TestingModule } from '@nestjs/testing';
import { InitializeActionService } from './initialize-action.service';
import { NpmService, FileSystemService } from '../../../core';

describe('InitializeActionService', () => {
  let service: InitializeActionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        InitializeActionService,
        {
          provide: NpmService,
          useValue: {
            installPackages: () => null,
            addScript: () => null,
            addTopLevelConfig: () => null,
          },
        },
        {
          provide: FileSystemService,
          useValue: {
            createDirectory: () => null,
            getCwdPath: () => null,
            writeFile: () => null,
          },
        },
      ],
    }).compile();

    service = module.get<InitializeActionService>(InitializeActionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
