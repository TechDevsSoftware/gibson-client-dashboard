import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ClientRegistration } from "src/app/api/models";
import { ClientService } from "src/app/api/services";

@Component({
  selector: "app-client-new",
  templateUrl: "./client-new.component.html",
  styleUrls: ["./client-new.component.scss"]
})
export class ClientNewComponent implements OnInit {
  clientReg: ClientRegistration;
  errMessage: string;

  constructor(
    private clientService: ClientService,
    private router: Router
  ) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm() {
    this.clientReg = {};
  }

  async addClient() {
    try {
      const result = await this.clientService.CreateClient({ client: this.clientReg }).toPromise();
      if (!result.id) throw new Error("Client could not be created");
      this.router.navigate(["/clients", result.id]);
    } catch (error) {
      this.errMessage = error.message;
    }
  }
}
