export interface VideoCriteria {
    isMandatory: boolean;
    type: "video_challenge";
    video: string; // Path to the video file
  }
  
  export interface Question {
    question: string;
    options: string[];
    answer: string;
  }
  
  export interface QuestionCriteria {
    isMandatory: boolean;
    type: "question_challenge";
    question_book: Question[];
  }
  
  export interface NFTCriteria {
    isMandatory: boolean;
    type: "nft_challenge";
    nft_collection: string; // NFT collection address
  }
  
  export interface IdentityCriteria {
    isMandatory: boolean;
    type: "identity_challenge";
    identity_provider: string; // Identity provider (e.g., "Gitcoin Passport", "Worldcoin", etc.)
  }
  
  export type PaymasterCriteria = 
      VideoCriteria|
      QuestionCriteria|
      NFTCriteria|
      IdentityCriteria 
  
  export interface Paymaster {
    name: string;
    description: string;
    image: string;
    type: string;
    applications: string[];
    paymaster_criteria: PaymasterCriteria[];
  }
  
  
  

  