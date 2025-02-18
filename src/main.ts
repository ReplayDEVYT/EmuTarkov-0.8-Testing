import InitiateRoutes from "./Endpoints/Routes";
import LauncherService from "./Services/Launcher";
import PlayerService from "./Services/PlayerService";
import Server from "./Services/Server";

LauncherService.Start();

PlayerService.CreateNewPlayer("67b3f8c16fa31c91ed298879", 1);
InitiateRoutes();

Server.Start();
