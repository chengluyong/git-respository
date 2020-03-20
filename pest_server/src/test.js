const data_all = [
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
  `mutiple`];
const data_part =  ['name', 'sex', 'age', 'fever', 'cough', 'expectoration', 'pharyngalgia', 'dry_pharynx', 'myalgia', 'tired', 'weak', 'chest', 'short_of_breath',
  'diarrhea', 'dyspnea','headache', 'wuhan_live_history', 'patient_community_live_history', 'wuhan_people_contach_history', 'patient_community_respiratory_symptoms',
  'cluster_onset', 'virus_patient_contact_history', 'no_contact_history', 'mutiple','photo_logging', 'class_milling', 'shadow_of_infiltration',
  'cable_shadow', 'spot_like_shadow', 'real_change', 'severity_of_disease', 'pleural_effussion'];

const arr_name = ['name', 'sex', 'age', 'fever', 'cough', 'expectoration', 'pharyngalgia', 'dry_pharynx', 'myalgia', 'tired', 'weak', 'chest', 'short_of_breath',
  'diarrhea', 'dyspnea','headache', 'wuhan_live_history', 'patient_community_live_history', 'wuhan_people_contach_history', 'patient_community_respiratory_symptoms',
  'cluster_onset', 'virus_patient_contact_history', 'no_contact_history', 'double_lungs','one_lungs', 'class_milling', 'shadow_of_infiltration',
  'cable_shadow', 'spot_like_shadow', 'real_change', 'severity_of_disease', 'pleural_effussion'];

console.log(arr_name.length);

function formatDate(numb, format)
{
  const time = new Date((numb - 1) * 24 * 3600000 + 1);
  time.setYear(time.getFullYear() - 70);
  const year = time.getFullYear() + '';
  const month = time.getMonth() + 1 + '';
  const date = time.getDate() - 1 + '';

  if (format && format.length === 1)
  {
    return year + format + month + format + date;
  }

  return year + (month < 10 ? '0' + month : month) + (date < 10 ? '0' + date : date);
}


console.log(formatDate(43847, '/')); // 2016-9-5

/*
function toSchema(arr)
{
  let result = '';

  if(arr)
  {
    arr.map(a =>
    {
      result += `${ a }: String \n`;
    })
  }
  console.log(result);
}
*/


/*
data_all.map(d =>
{
  console.log(d);
});
*/








