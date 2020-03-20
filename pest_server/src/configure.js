
/* 名字		name
 性别  sex
 年龄   age
 -------------
 发热 fever
 咳嗽 cough
 咳痰 expectoration
 咽痛   pharyngalgia
 咽干  dry_pharynx
 肌痛 myalgia
 疲劳 tired
 乏力 weak
 胸闷 chest
 气短 short_of_breath
 腹泻 diarrhea
 呼吸困难  dyspnea
 头痛  headache
 ------------------------------------------------------------
 武汉及周边居住史 wuhan_live_history
 病例报告社区居旅史 patient_community_live_history
 武汉及周边人群接触史
 wuhan_people_contach_history
 病例报告社区发热或有呼吸道症状患者接触史
 patient_community_respiratory_symptoms
 聚集性发病
 cluster_onset
 新型冠状病毒感染者接触史
 virus_patient_contact_history
 无任何接触史
 no_contact_history
 --------------------------------------------------------------
 多发  mutiple
 //  单发 有影像记录减去单发
 影像记录 photo_logging
 磨玻璃影 class_milling
 浸润影 shadow_of_infiltration
 条索状影 cable_shadow
 斑片状影 spot_like_shadow
 实变影 real_change
 病情严重程度 severity_of_disease
 胸腔积液 pleural_effussion
*/

const configure  =
    {
      connection: {
        password: '123456',
        port: '33060',
        host: 'localhost',
        // host: '10.68.137.135',
        user: 'root',
      },
      database: {
        name: 'dicom',
        table: 'pest_data'
      },
      database_report: {
        name: 'pest',
        table: 'patient_report'
      },
      // 查询的字段
      database_field: {
        names_all: [
          `name`,
          `sex`,
          `age`,
          `complain`,
          `fever`,
          `temperate`,
          `cough`,
          `expectoration`,
          `pharyngalgia`,
          `dry_pharynx`,
          `myalgia`,
          `tired`,
          `weak`,
          `chest`,
          `short_of_breath`,
          `diarrhea`,
          `dyspnea`,
          `headache`,
          `diabetes`,
          `coronary`,
          `hypertesion`,
          `chronic_obstructive_pulmonary_disease`,
          `hepatopathy_history`,
          `nephroma_history`,
          `tuberculosis_history`,
          `disease_time`,
          `visit_time`,
          `time_space`,
          `diagnosis_time`,
          `wuhan_live_history`,
          `patient_community_live_history`,
          `wuhan_people_contach_history`,
          `patient_community_respiratory_symptoms`,
          `cluster_onset`,
          `virus_patient_contact_history`,
          `no_contact_history`,
          `incubation_period`,
          `double_lungs`,
          `one_lungs`,
          `lesions_location`,
          `ct_no_exception`,
          `pleural_effussion`,
          `real_change`,
          `spot_like_shadow`,
          `class_milling`,
          `shadow_of_infiltration`,
          `cable_shadow`,
          `checkout_date`,
          `WBC`,
          `RBC`,
          `HB_or_HGB`,
          `PLT`,
          `NEUT_OR_N`,
          `percentage_NEUT_OR_N`,
          `LY`,
          `percentage_LY`,
          `M_OR_MONO`,
          `PERCENTAGE_M_OR_MONO`,
          `E`,
          `PERCENTAGE_E`,
          `B`,
          `PERCENTAGE_B`,
          `CRP`,
          `ESR`,
          `PCT`,
          `CK_MB`,
          `oxygen_concentration`,
          `oxygen_number`,
          `PH`,
          `PaO2`,
          `SaO2`,
          `PCO2`,
          `Lac`,
          `GPT_OR_ALT`,
          `GOT_OR_AST`,
          `LDH`,
          `severity_of_disease`,
          `remark`,
          `photo_logging`,
          `mutiple`]
      }
    };


export default configure;
