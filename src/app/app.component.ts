import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'
var powerbi: any;
import * as pbi from 'powerbi-client';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
   embedConfiguration = {
    type: 'report',
    id: '6781cce6-129c-4f25-8010-6a975fb0b60a',
    embedUrl: 'https://app.powerbi.com/reportEmbed?reportId=6781cce6-129c-4f25-8010-6a975fb0b60a&groupId=d8207756-c2e0-496e-9e89-bbdd168`af87d',
    tokenType: "Embed",
    accessToken:'H4sIAAAAAAAEAB1WRQ7siBG9y986ktltR5qFmZm9M7aZeZS7p2f2pZLq1aO__1jp009p8ee_f1wucgNO7HRdbUHDU5vzYkdHm5ZyC4Y4tURZKE2QvtO788pRoHlKllr27V9qswDt3PV-vkPSasDTnm9foe_ggIcr2jsJQWy9UT7j7ApxuQhZJuwuh4d5VHhJUSDmw23uY5fYoB8Xo0VnCZ_lCCGp4GcrGAkH6QGGjlAlNXrcSggkurth335FKbVKQNL6l13O8lROw2YST9MVbT2LAg2HsKsMTZNKSrWq59yVAXa5zFSQ9SXnFBcwRa1qvC_J1gDsOYerSMKdPAjiVXcTu5HGswKWmW9LZgTJav4edZxTx7f9koRSByGvDgMFtJbTk2_oEuhniPUyhFY2ta-JwL6vrgtURlfghZQ2-ShdbmcPR22OHaHKs272-rhxmmP5-QnSdB8HeW4fw2PdjmtecltA3n6FsniBJ08m2MPthwizNjDj7jumIoYols1QNvoyzB3kS88cSzPynQy3yF5JhfbqBVxE1XNTlmwIJSOv3xQRU_7xGjFD0mMTa8-GO7V9hh2Qam2cg-C1DFuXoGSEJbsDgdvuZQ9HzPm9tbodpD27e9O0F44xiHqP6jwiLujgjyBA9wdCW6DUXpZZt8Fjy46STWTikGMpDdOaQhSKy2YB4vz1KqZdSRJgSAztS1RrvgfWwShhIOnNx31QZW7bELzg7-DAoS2Y7KUYQCj5dphV5RQP6M39-Y6LGxoAiUsHM_ORdCJ4OupaURJtYTQox7XfucwwaR0UGrRs2U_CyktC5LLQnDNvYo3Md3rY2ijCekYuAjJ86kQt-ItA-cWbutl_hPwOAKKDKMInuo_hbMzgMfPH2-K4C9jBI7LvrhhAhEie2kYvfRHv3Q27y1I7pKOrP5evkn8BpGgt_d1uNGdaYQxK2cyOEU4EKU-Eakukzcx5VgJ7ksxzBDcINCoyXQwlwGkk875GEm8Q5RNurLUWLaRniEsQKNSDw1NsE6Xkb0E5bOQU9jXL6Ad8M1toOe8rQ75oRF0qKAsn3YQv7Vo7iCx376IcPcocoZZkkYOzBYTgMEXr5ckFq7ceh_SgNdbo6cPpQt5ugzCvaNGxJbhZYgicanQOx-Wtp-xP6A5_0bxHDdCxqD0P4KQTiLHB7GIzOZPbc0m49ONrP0q9gt5THqNNz2T8mWk8VrXYB3ptKy-59FFjBX6MYotPX6-lqAW2mWE4eMsLZrG0fOOh957MUyZfUMtc8pMBopDN442hZzhtlJ8VpvkKQQSU4rM_nE942TrFFQX4PViTnmZgz0_znYWJSKbPh7IoPvG9tI8iDUvpW26I3cPTEjQxY493-y7eWHcPUm7CuYJ6pa6JMw_HvC0G8qt2MMgq6vDCIAdP02hczmfa9DAxUjvcLqNEbiGgjgwGjkBPPmh5ypqziVaNmP5HAHjJ-seFrs6_Wz3MruQmVMZtX-keunV5yZbMpUEcm1ATZtnILvqq4xDdofPZe2r9LjZdYgorB1GmYngnqrat3L9r2Aa4F5FVIwH7AuBqarQJVSVbCGjHCGGVzFeBk4PdiXv1BXEzKVfV6eXIwFB4V8Wv4nxA6fMTC7oY6qwYfErLsNbLFmbRPwKFh2KpsKV6ChY_6yQSApeOsNr46cgkwnfuWCtCEqvDCZeQoncVWE_33ehmlY-5Zqme7SAC1oP7dt6HlyI97ogp87PoMp-6JG0rre7OKMOi2MACaCZYt2KRN4hxM5_FkcG1mxFt5OvAyr6Gru7Zo2YzNg0DEtsjWyDR1j5iQk2tLwcwME2Rnh5fTMKRPglFZyLAnjfMJg7ezz74OwTBTmmf8-cJrNbySV52BMXxdy-xv6bmH7wn9tAAgXZL8S1hkNZHe5X1t5WkUuhrzftYnVBxEQWQGR5GdlUWdyVnssHPlDYV0hliY5QMN0bjVBOEgjSJZ4hH4gVrFQ1BwepV_EWLS4GgcrpW90yZrqoPtT5VVQBVUthdlQqU5OszdlNm7N92UhL-jOx9g_O0j0MjvcOBwnRDCeEnqI10PpKz9WLuqAFOC0lKVR9al2vTrM7WQ662V4Kxh9l2tjS4yXH8X3_-84ddn3mf1PL5Rf8Ij9yeUQUVjDVXpfrb-1voDzCrtjHYCNIxn-xPfPfkLUBFTYfqnUIW9wfN9CO4R2D_QqLK788XXPiLvRxWYSRXJ5dnIqdVVkm0SqMlWPk7xkMtmDZfPbAMSY5VCqi2Z-sQJwRJ0Ihcpt1jHHwf4QvrGCUidj2qusK9oIv3pVb-vfS4wDUSmeSrzRMmL9Y-IuoVmVzeamTlc0mTa5YaSIJO5I6vlDg-CT-Wn_BaO9HBguxq3V3wni6LHSSxnm78qVjGDBKfE9bOMZ1pLjtceH6RNaQA07_Eg37HVs1t7XslC8lE3lszQUW4SHU0GQmlQ2XYPSZHS0g9Zj0VufzCulDl9l__wvzMdbnKwQ9liyNnTTiOb7euxJMfrp3P5PXvlNv8Mn0_1vKfZ1jrvemjV0pvfzYpVdeffGWbltmMhOshhgmDT-Aby-eDz5ihXQ7H41mPG5R-ip21I_KDmgZzOoR9aiL-KxR3YkrmbOa5fhYK-j7z8cmbS_-kbwCUjFM6vWiaBRmr6b1pYpE5xYW6PaJmmgCo1WUB4Fk2lExv771X14cOG9TOmEPEw48g1jRMFWuIKXax6wz9jAnFcUr-oUbJ-aKhGppGeCYA4majtrPz3Uwz8sNN7i3SoqAS9lnOHedohjTUwxVRfDP4HfJa_LWvwCEYANvkS3Fbz7lbAdVQ0RHmuI1rmwXWCKBlZah9hmfCcVZCRWMqf78JjrYYzZh9DDGeDlHr6hKL7w_m__0fSgGxnu4KAAA='
  };
  constructor(private httpClient:HttpClient) {

  }

  onEmbedded(event){
    console.log(event)
  }

  ngOnInit() {
    this.httpClient.get('http://localhost:53806/api/Values?username=&roles=').subscribe(res => {
      console.log(res)
    })
  }



}
