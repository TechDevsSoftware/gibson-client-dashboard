import { Component, OnInit } from "@angular/core";
import { ClientService } from "../client.service";
import { ClientRegistration } from "../../app/app.model";
import { Router } from "@angular/router";

@Component({
  selector: "app-client-new",
  templateUrl: "./client-new.component.html",
  styleUrls: ["./client-new.component.scss"]
})
export class ClientNewComponent implements OnInit {
  clientReg: ClientRegistration;
  errMessage: string;

  constructor(private clientService: ClientService, private router: Router) {}

  ngOnInit() {
    this.resetForm();
  }

  resetForm() {
    this.clientReg = new ClientRegistration();
  }

  async addClient() {
    try {
      const result = await this.clientService.createClient(this.clientReg);
      if (!result.id) throw new Error("Client could not be created");
      this.router.navigate(["/clients", result.id]);
    } catch (error) {
      this.errMessage = error.message;
    }
  }
}
