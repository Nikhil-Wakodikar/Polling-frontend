import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { HttpService } from 'src/app/services/http/http.service';
import { ToastService } from 'src/app/services/toast/toast.service';

const pollDetails = {
  "nameOfConstituency": "District 1",
  "dateOfPoll": {
    "year": 2024,
    "month": 10,
    "day": 11
  },
  "numberAndNameofPollingStation": {
    "governmentBuilding": "Central Hall",
    "privateBuilding": "None",
    "temporaryStructure": "Tent A"
  },
  "pollingOfficers": {
    "officersRecruitedLocally": "2",
    "officerInAbsence": "Officer C",
    "reasonOfAppointment": "Lack of available officers"
  },
  "electronicVotingMachine": {
    "controlUnitsUsed": "2",
    "controlUnitsSerial": "CU12345, CU67890",
    "ballotUnitsUsed": "2",
    "ballotUnitsSerial": "BU12345, BU67890"
  },
  "paperSeals": {
    "sealsUsed": "3",
    "sealsSerial": "PS12345, PS67890, PS11223"
  },
  "specialTags": {
    "supplied": "5",
    "suppliedSerial": "ST12345, ST67890, ST11223, ST33445, ST55667",
    "used": "4",
    "usedSerial": "ST12345, ST67890, ST11223, ST33445",
    "unusedSerial": "ST55667"
  },
  "vvpat": {
    "printersUsed": "1",
    "printersSerial": "VPAT12345"
  },
  "pollingAgents": {
    "totalCandidates": "4",
    "agentsPresentAtStart": "3",
    "agentsLate": "1",
    "agentsPresentAtClose": "3"
  },
  "pollingStationDetails": {
    "totalVotersAssigned": "1200",
    "electorsAllowed": "1150",
    "totalElectors": "1200",
    "votesRecorded": "900",
    "nonRecordedVotes": "50"
  },
  "numberOfElectorsVoted": {
    "men": "450",
    "women": "400",
    "thirdGender": "50",
    "total": "900"
  },
  "challengedVoteAllowed": {
    "number": 2,
    "allowed": true
  },
  "challengedRejected": {
    "number": 1,
    "rejected": true
  },
  "amountOfForfeited": "5000",
  "numberofEDCVoters": "10",
  "numberofOverseasVoters": "5",
  "numberofVotersWithCompanion": "20",
  "numberofProxyVoters": "2",
  "numberOfTenderdVote": "1",
  "ageDeclaration": {
    "obtained": "Yes",
    "refuse": "No"
  },
  "reasonForPollAdjournment": "Weather conditions",
  "votesCast": [
    {
      "timeRange": "08:00-09:00",
      "votes": "100"
    },
    {
      "timeRange": "09:00-10:00",
      "votes": "200"
    }
  ],
  "detailsOfVisitor": [
    {
      "officerName": "Officer X",
      "visitTime": "10:00 AM",
      "description": "Inspection completed",
      "votesPolledForm17": "100",
      "votesPolledEVM": "900"
    }
  ],
  "slipsIssued": 500,
  "closingTime": "05:00",
  "electoralOffences": {
    "canvassing": true,
    "impersonation": false,
    "fraudulentDefacing": false,
    "bribing": false,
    "intimidation": true,
    "boothCapturing": false
  },
  "pollInterruptions": {
    "riot": false,
    "openViolence": false,
    "naturalCalamity": true,
    "boothCapturing": false,
    "votingMachineFailure": false,
    "other": "Heavy rainfall"
  },
  "votingMachineIssues": {
    "unlawfullyTaken": "No",
    "lostOrDestroyed": "No",
    "damagedOrTampered": "No"
  },
  "complaints": "None",
  "breachOfLawCases": "None",
  "irregularitiesReport": "No major issues",
  "declarationsMade": "All declarations completed",
  "place": "Polling Station 1",
  "date":  {
    "year": 2024,
    "month": 10,
    "day": 20
  }
}
@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss']
})
export class PreviewComponent implements OnInit {

  visitorArray:any[]=[
    {
      officerName: 'test 1 - Officer1',
      visitTime: '10 a.m.',
      description: 'Peaceful',
      votesPolledForm17: '20',
      votesPolledEVM: '30'
    },  {
      officerName: 'test 2 - Officer2',
      visitTime: '12 p.m.',
      description: 'Peaceful',
      votesPolledForm17: '40',
      votesPolledEVM: '30'
    }
  ]
  voteCastArray:any[]=[
    {
      timeRange: 'From 7 a.m. To 9 a.m.',
      votes: '30',
      edit:false
    },
    {
      timeRange: 'From 9 a.m. To 11 a.m.',
      votes: '40',
      edit:false
    },{
      timeRange: 'From 11 a.m. To 1 p.m.',
      votes: '50',
      edit:false
    },{
      timeRange: 'From 1 p.m. To 3 p.m.',
      votes: '60',
      edit:false
    },{
      timeRange: 'From 3 p.m. To 5 p.m.',
      votes: '70',
      edit:false
    }
  ]

  model!: NgbDateStruct;
  date!: { year: number; month: number };

  pollForm!: FormGroup
  constructor(
    private fb: FormBuilder,
    private http:HttpService,
    private toastService:ToastService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.buidForm()
  }

  buidForm() {
    this.pollForm = this.fb.group({
      nameOfConstituency: ['', Validators.required],
      dateOfPoll: ['', Validators.required],
      numberAndNameofPollingStation: this.fb.group({
        governmentBuilding: [''],
        privateBuilding: [''],
        temporaryStructure: ['']
      }),
      pollingOfficers: this.fb.group({
        officersRecruitedLocally: [''],
        officerInAbsence: [''],
        reasonOfAppointment: ['']
      }),
      electronicVotingMachine: this.fb.group({
        controlUnitsUsed: [''],
        controlUnitsSerial: [''],
        ballotUnitsUsed: [''],
        ballotUnitsSerial: ['']
      }),
      paperSeals: this.fb.group({
        sealsUsed: [''],
        sealsSerial: ['']
      }),
      specialTags: this.fb.group({
        supplied: [''],
        suppliedSerial: [''],
        used: [''],
        usedSerial: [''],
        unusedSerial: ['']
      }),
      vvpat: this.fb.group({
        printersUsed: [''],
        printersSerial: ['']
      }),
      pollingAgents: this.fb.group({
        totalCandidates: [''],
        agentsPresentAtStart: [''],
        agentsLate: [''],
        agentsPresentAtClose: ['']
      }),

      pollingStationDetails: this.fb.group({
        totalVotersAssigned: [''],
        electorsAllowed: [''],
        totalElectors: [''],
        votesRecorded: [''],
        nonRecordedVotes: ['']
      }),

      numberOfElectorsVoted: this.fb.group({
        men: [''],
        women: [''],
        thirdGender: [''],
        total: ['']
      }),
      challengedVoteAllowed: this.fb.group({
        number: [null],
        allowed: [null],
      }),
      challengedRejected: this.fb.group({
        number: [null],
        rejected: [null],
      }),
      amountOfForfeited: [''],
      numberofEDCVoters: [''],
      numberofOverseasVoters: [''],
      numberofVotersWithCompanion: [''],
      numberofProxyVoters: [''],
      numberOfTenderdVote: [''],
      ageDeclaration: this.fb.group({
        obtained: [''],
        refuse: [''],
      }),

      reasonForPollAdjournment: [''],
      votesCast: this.fb.array([
       ...this.voteCastArray.map((vote:any)=>
        this.fb.group(vote)
      )
      ]),

      detailsOfVisitor: this.fb.array([
        ...this.visitorArray.map((visitor:any)=>
          this.fb.group(visitor)
        )
      ]),

      slipsIssued: [null],
      closingTime: [null],

      electoralOffences: this.fb.group({
        canvassing: [null],
        impersonation: [null],
        fraudulentDefacing: [null],
        bribing: [null],
        intimidation: [null],
        boothCapturing: [null]
      }),

      pollInterruptions: this.fb.group({
        riot: [false],
        openViolence: [false],
        naturalCalamity: [false],
        boothCapturing: [false],
        votingMachineFailure: [false],
        other: [null]
      }),

      votingMachineIssues: this.fb.group({
        unlawfullyTaken: [null],
        lostOrDestroyed: [null],
        damagedOrTampered: [null],
      }),
      complaints: [null],
      breachOfLawCases: [null],
      irregularitiesReport: [null],
      declarationsMade: [null],
      place: [null],
      date: [null]
    })
  }


  get votesCastFormArray():FormArray{
    return this.pollForm.get('votesCast') as FormArray
  }

  get visitorsDetailsFormArray():FormArray{
    return this.pollForm.get('detailsOfVisitor') as FormArray
  }


  patchFormValue(){
    // const {dateOfPoll,date,...restDetails} = pollDetails
    this.pollForm.patchValue({...pollDetails})
  }


  submitPollingDetails(){
    if(this.pollForm.invalid) return
    this.http
    .simplePost(`http://localhost:5200/poll`, this.pollForm.value)
    .subscribe({
      next: (resp: any) => {
        console.log(resp);
        this.toastService.success('Successfully saved!')
        this.router.navigate(['/dashboard/file-upload'])
        this.pollForm.reset()
          },
          error: (err) => {},
          complete:()=> {},
        });
  }
}
