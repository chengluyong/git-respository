import gql from 'graphql-tag';


export const query_list = gql`

  query($index: Int!, $rows: Int!)
  {
     get_information(index: $index, rows: $rows)
    {
      name
      sex
      age
      complain
      fever
      temperate
      cough
      expectoration
      pharyngalgia
      dry_pharynx
      myalgia
      tired
      weak
      chest
      short_of_breath
      diarrhea
      dyspnea
      headache
      diabetes
      coronary
      hypertesion
      chronic_obstructive_pulmonary_disease
      hepatopathy_history
      nephroma_history
      tuberculosis_history
      disease_time
      visit_time
      time_space
      diagnosis_time
      wuhan_live_history
      patient_community_live_history
      wuhan_people_contach_history
      patient_community_respiratory_symptoms
      cluster_onset
      virus_patient_contact_history
      no_contact_history
      incubation_period
      double_lungs
      one_lungs
      lesions_location
      ct_no_exception
      pleural_effussion
      real_change
      spot_like_shadow
      class_milling
      shadow_of_infiltration
      cable_shadow
      checkout_date
      WBC
      RBC
      HB_or_HGB
      PLT
      NEUT_OR_N
      percentage_NEUT_OR_N
      LY
      percentage_LY
      M_OR_MONO
      PERCENTAGE_M_OR_MONO
      E
      PERCENTAGE_E
      B
      PERCENTAGE_B
      CRP
      ESR
      PCT
      CK_MB
      oxygen_concentration
      oxygen_number
      PH
      PaO2
      SaO2
      PCO2
      Lac
      GPT_OR_ALT
      GOT_OR_AST
      LDH
      severity_of_disease
      remark
      photo_logging
      mutiple
    }
  }
`;

export const query_list_group_by_id = gql`
  query
  {
    get_information_group_by_name
    {
      name
      sex
      age
      complain
      fever
      temperate
      cough
      expectoration
      pharyngalgia
      dry_pharynx
      myalgia
      tired
      weak
      chest
      short_of_breath
      diarrhea
      dyspnea
      headache
      diabetes
      coronary
      hypertesion
      chronic_obstructive_pulmonary_disease
      hepatopathy_history
      nephroma_history
      tuberculosis_history
      disease_time
      visit_time
      time_space
      diagnosis_time
      wuhan_live_history
      patient_community_live_history
      wuhan_people_contach_history
      patient_community_respiratory_symptoms
      cluster_onset
      virus_patient_contact_history
      no_contact_history
      incubation_period
      double_lungs
      one_lungs
      lesions_location
      ct_no_exception
      pleural_effussion
      real_change
      spot_like_shadow
      class_milling
      shadow_of_infiltration
      cable_shadow
      checkout_date
      WBC
      RBC
      HB_or_HGB
      PLT
      NEUT_OR_N
      percentage_NEUT_OR_N
      LY
      percentage_LY
      M_OR_MONO
      PERCENTAGE_M_OR_MONO
      E
      PERCENTAGE_E
      B
      PERCENTAGE_B
      CRP
      ESR
      PCT
      CK_MB
      oxygen_concentration
      oxygen_number
      PH
      PaO2
      SaO2
      PCO2
      Lac
      GPT_OR_ALT
      GOT_OR_AST
      LDH
      severity_of_disease
      remark
      photo_logging
      mutiple
    }
  }
`;

export const query_count = gql`
  query($type: String!)
  {
    get_count(type: $type)
    {
      count
    }
  }
  `;

export const get_report = gql`
   query($name: Int!)
   {
    get_report(name: $name)
    {
      name
      report
    }
   }
`;

export const query_severe_data = gql`

    query($index: Int!, $rows: Int!)
    {
        get_severe_patient(index: $index, rows: $rows)
        {
            name
            sex
            age
            complain
            disease_time
            visit_time
            time_space
            diagnosis_time
            blood_pressure
            fever
            temperate
            cough
            expectoration
            myodynia
            tired
            short_of_breath
            diarrhea
            rhinobyon
            running_nose
            pharyngalgia
            diabetes
            coronary_heart_disease
            high_blood_pressure
            chronic_obstructive_pulmonary_disease
            liver_disease_history
            kidney_disease_history
            malignancy
            Rheumatic_immunity
            ILD
            immunosuppressive
            fat
            tuberculosis_history
            smoke
            drink
            wuhan_people_contach_history
            patient_community_respiratory_symptoms
            Cluster_disease
            virus_patient_contact_history
            no_contact_history
            incubation
            double_lungs
            one_lungs
            lesions_location
            ct_no_exception
            pleural_effussion
            real_change
            spot_like_shadow
            class_milling
            shadow_of_infiltration
            cable_shadow
            checkout_date
            WBC
            RBC
            HB_or_HGB
            PLT
            NEUT_OR_N
            percentage_NEUT_OR_N
            LY
            percentage_LY
            M_OR_MONO
            PERCENTAGE_M_OR_MONO
            E
            B
            CRP
            ESR
            PCT
            CK_MB
            oxygen_concentration
            oxygen_number
            PH
            PaO2
            SaO2
            PCO2
            Lac
            GPT_OR_ALT
            GOT_OR_AST
            severity_of_disease
            remark
        }
    }
`;