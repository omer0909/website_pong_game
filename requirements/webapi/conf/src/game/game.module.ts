import { Module } from "@nestjs/common";
import { UserModule } from "src/user/user.module";
import { GameService } from "./game.service";

@Module({
    providers: [GameService],
    imports: [UserModule]
})
export class GameModule { }