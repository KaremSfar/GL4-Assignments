import { Module } from '@nestjs/common';
import { AuthModule } from 'src/infrastructure/rest-apis/auth/auth.module';

@Module({
  imports: [],
})
export class GuardsModule {}
