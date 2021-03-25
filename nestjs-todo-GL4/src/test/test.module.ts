import { Global, Module } from "@nestjs/common";
import { AuthModule } from "src/auth/auth.module";
import { TestController } from "./test.controller";



// Si vous deveez importer un module partout, vous pouvez utiliser le décorateur global
// Generalement c'est le module principal qui s'en charge
@Global() 
@Module({
    imports: [AuthModule],
    controllers: [TestController]
})
export class TestModule{

}