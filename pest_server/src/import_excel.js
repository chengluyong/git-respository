//生成sql‘


const mysqlx = require("@mysql/xdevapi");

let xlsx = require('node-xlsx');
let sheets = xlsx.parse('F:\\pdf\\yiqingshuju\\data.xlsx');

item_data();


async function item_data()
{
  sheets.forEach(function(sheet)
  {
    let data = sheet.data;
    let names = ['name',
      'sex',
      'age',
      'complain',  //主诉
      'disease_time',     // 发病时间
      'visit_time',   //就诊时间
      'time_space',   // 就诊间隔
      'diagnosis_time', // 确诊时间
      'blood_pressure',  //血压
      'fever',
      'temperate',    //提问
      'cough',    //咳嗽
      'expectoration',    //咳痰
      'myodynia',  //肌痛
      'tired', //乏力
      'short_of_breath', //呼吸困难
      'diarrhea',  //腹泻
      'rhinobyon', //鼻塞
      'running_nose', //流涕
      'pharyngalgia', //咽痛
      'diabetes', // 糖尿病
      'coronary_heart_disease', //冠心病
      'high_blood_pressure',
      'chronic_obstructive_pulmonary_disease', //慢阻肺
      'liver_disease_history', //肝病史
      'kidney_disease_history', //肾病史
      'malignancy', //恶性肿瘤
      'Rheumatic_immunity', //风湿免疫病
      'ILD', //间质性肺病
      'immunosuppressive', //免疫抑制治疗
      'fat',
      'tuberculosis_history', //结核病史
      'smoke',
      'drink',
      'wuhan_people_contach_history', //武汉接触史
      'patient_community_respiratory_symptoms',  //病例报告社区患者接触史
      'Cluster_disease', //聚集性发病
      'virus_patient_contact_history', //新型冠状病毒感染者接触史
      'no_contact_history', //无任何接触史
      'incubation', //潜伏期
      'double_lungs',
      'one_lungs',
      'lesions_location',   //病灶定位
      'ct_no_exception',
      'pleural_effussion',  //胸腔积液
      'real_change',
      'spot_like_shadow',  //斑片状影
      'class_milling',  //磨玻璃影
      'shadow_of_infiltration',  //浸润影
      'cable_shadow',  //条索状影
      'checkout_date',
      'WBC', 'RBC',
      'HB_or_HGB', 'PLT',
      'NEUT_OR_N', 'percentage_NEUT_OR_N',  //中性粒细胞
      'LY', 'percentage_LY',  //淋巴
      'M_OR_MONO', 'PERCENTAGE_M_OR_MONO',  //单核细胞
      'E',   //嗜酸性粒细胞
      'B',   //嗜碱性粒细胞
      'CRP',
      'ESR',
      'PCT',
      'CK_MB',
      'oxygen_concentration', 'oxygen_number',
      'PH', 'PaO2',
      'SaO2', //血饱和度
      'PCO2',
      'Lac',  //血乳酸
      'GPT_OR_ALT', //谷丙
      'GOT_OR_AST',  //谷草
      'severity_of_disease',
      'remark',   //备注
    ];
    names = names.join(",");


    console.log(data);
    //去除undefined
    for (let i = 1; i <= data.length - 1; i++)
    {
    //  console.log(data[i]);

      let patient;
      patient = "'" + data[i].join("', '") + "'";

      const sql = `insert into pest.pest_data_severe(${names}) values(${patient}) ;`;
      console.log(sql);
    }
  })
};


let names = ['name',
  'sex',
  'age',
  'complain',  //主诉
  'disease_time',     // 发病时间
  'visit_time',   //就诊时间
  'time_space',   // 就诊间隔
  'diagnosis_time', // 确诊时间
  'blood_pressure',  //血压
  'fever',
  'temperate',    //提问
  'cough',    //咳嗽
  'expectoration',    //咳痰
  'myodynia',  //肌痛
  'tired', //乏力
  'short_of_breath', //呼吸困难
  'diarrhea',  //腹泻
  'rhinobyon', //鼻塞
  'running_nose', //流涕
  'pharyngalgia', //咽痛
  'diabetes', // 糖尿病
  'coronary_heart_disease', //冠心病
  'high_blood_pressure',
  'chronic_obstructive_pulmonary_disease', //慢阻肺
  'liver_disease_history', //肝病史
  'kidney_disease_history', //肾病史
  'malignancy', //恶性肿瘤
  'Rheumatic_immunity', //风湿免疫病
  'ILD', //间质性肺病
  'immunosuppressive', //免疫抑制治疗
  'fat',
  'tuberculosis_history', //结核病史
  'smoke',
  'drink',
  'wuhan_people_contach_history', //武汉接触史
  'patient_community_respiratory_symptoms',  //病例报告社区患者接触史
  'Cluster_disease', //聚集性发病
  'virus_patient_contact_history', //新型冠状病毒感染者接触史
  'no_contact_history', //无任何接触史
  'incubation', //潜伏期
  'double_lungs',
  'one_lungs',
  'lesions_location',   //病灶定位
  'ct_no_exception',
  'pleural_effussion',  //胸腔积液
  'real_change',
  'spot_like_shadow',  //斑片状影
  'class_milling',  //磨玻璃影
  'shadow_of_infiltration',  //浸润影
  'cable_shadow',  //条索状影
  'checkout_date',
  'WBC', 'RBC',
  'HB_or_HGB', 'PLT',
  'NEUT_OR_N', 'percentage_NEUT_OR_N',  //中性粒细胞
  'LY', 'percentage_LY',  //淋巴
  'M_OR_MONO', 'PERCENTAGE_M_OR_MONO',  //单核细胞
  'E',   //嗜酸性粒细胞
  'B',   //嗜碱性粒细胞
  'CRP',
  'ESR',
  'PCT',
  'CK_MB',
  'oxygen_concentration', 'oxygen_number',
  'PH', 'PaO2',
  'SaO2', //血饱和度
  'PCO2',
  'Lac',  //血乳酸
  'GPT_OR_ALT', //谷丙
  'GOT_OR_AST',  //谷草
  'severity_of_disease',
  'remark',   //备注
];
names = names.join(": String \n");
console.log(names);