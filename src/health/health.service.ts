import { Injectable } from '@nestjs/common';
import { readFileSync } from 'fs';
import { join } from 'path';

interface PackageJson {
  version?: string;
}

@Injectable()
export class HealthService {
  private readonly version: string;

  constructor() {
    const packageJsonPath = join(__dirname, '../../package.json');
    const packageJson = JSON.parse(
      readFileSync(packageJsonPath, 'utf-8'),
    ) as PackageJson;
    this.version = packageJson.version || 'unknown';
  }

  getStatus() {
    return {
      status: 'ok',
      uptime: process.uptime(),
      timestamp: new Date().toISOString(),
    };
  }
  getVersion() {
    return { version: this.version };
  }
}
