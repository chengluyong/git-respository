import  mysql_deal  from './mysql_deal'
import { makeExecutableSchema } from 'graphql-tools'

const definitions =
    `
    type patient
    {
      name: ID
      sex: String 
      age: String 
      complain: String 
      fever: String 
      temperate: String 
      cough: String 
      expectoration: String 
      pharyngalgia: String 
      dry_pharynx: String 
      myalgia: String 
      tired: String 
      weak: String 
      chest: String 
      short_of_breath: String 
      diarrhea: String 
      dyspnea: String 
      headache: String 
      diabetes: String 
      coronary: String 
      hypertesion: String 
      chronic_obstructive_pulmonary_disease: String 
      hepatopathy_history: String 
      nephroma_history: String 
      tuberculosis_history: String 
      disease_time: String 
      visit_time: String 
      time_space: String 
      diagnosis_time: String 
      wuhan_live_history: String 
      patient_community_live_history: String 
      wuhan_people_contach_history: String 
      patient_community_respiratory_symptoms: String 
      cluster_onset: String 
      virus_patient_contact_history: String 
      no_contact_history: String 
      incubation_period: String 
      double_lungs: String 
      one_lungs: String 
      lesions_location: String 
      ct_no_exception: String 
      pleural_effussion: String 
      real_change: String 
      spot_like_shadow: String 
      class_milling: String 
      shadow_of_infiltration: String 
      cable_shadow: String 
      checkout_date: String 
      WBC: String 
      RBC: String 
      HB_or_HGB: String 
      PLT: String 
      NEUT_OR_N: String 
      percentage_NEUT_OR_N: String 
      LY: String 
      percentage_LY: String 
      M_OR_MONO: String 
      PERCENTAGE_M_OR_MONO: String 
      E: String 
      PERCENTAGE_E: String 
      B: String 
      PERCENTAGE_B: String 
      CRP: String 
      ESR: String 
      PCT: String 
      CK_MB: String 
      oxygen_concentration: String 
      oxygen_number: String 
      PH: String 
      PaO2: String 
      SaO2: String 
      PCO2: String 
      Lac: String 
      GPT_OR_ALT: String 
      GOT_OR_AST: String 
      LDH: String 
      severity_of_disease: String 
      remark: String 
      photo_logging: String 
      mutiple: String 
    }
  
    type count
    {
      count: Int
    }
   
    type report
    {
      name: Int
      report: String
    }
    
    type result
    {
      result: Int
    }
   
  type Query
  {
    #查询信息
    get_information(index: Int!, rows: Int!): [patient]
    #查询信息
    get_information_group_by_name: [patient]
    #查询条数
    get_count: count
    #查询患者病例报告
    get_report(name: Int!): report
  }
  
  type Mutation
  {
    #生成pdf
    build_pdf(url: String!, save_path: String!): result
  }
      
  `;

const resolvers =
    {
      Query:
          {
            //查询所有数据
            get_information: (_, { index, rows }) => mysql_deal.get_information(index, rows),
            //查询每个患者的数据
            get_information_group_by_name: () => mysql_deal.get_information_group_by_name(),

            get_count: () => mysql_deal.get_count(),

            get_report: (_, { name } )=> mysql_deal.get_report(name),
          },

       Mutation:
         {
           build_pdf: (_, { url, save_path }) =>
           {
             return mysql_deal.build_pdf(url, save_path);
           },
         }
    };

const schema = makeExecutableSchema({ typeDefs: definitions, resolvers: resolvers });


export  default schema ;

