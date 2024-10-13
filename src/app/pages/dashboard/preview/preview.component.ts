import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

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
  constructor(private fb: FormBuilder) { }

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
}
