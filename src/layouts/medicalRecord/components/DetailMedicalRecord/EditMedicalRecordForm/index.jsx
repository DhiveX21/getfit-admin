import React, { useEffect } from "react";
import MDTypography from "components/MDTypography";
import { useState } from "react";
import DynamicForm from "./DynamicForm";
import { updateMedicalRecordAction } from "layouts/medicalRecord/medicalRecordAction";
import { useDispatch } from "react-redux";

export default function EditMedicalRecordForm({ medicalRecord, editMode, setEditMode }) {
  const [fieldMedicalRecord, setFieldMedicalRecord] = useState(medicalRecord.records);
  const dispatch = useDispatch();

  function addFieldHandle(index) {
    setFieldMedicalRecord([...fieldMedicalRecord, { key: index, value: " " }]);
  }

  function removeFieldHandle(index) {
    let tempField = [...fieldMedicalRecord];
    tempField.splice(index, 1);
    setFieldMedicalRecord(tempField);
  }

  function editFieldHandle(index, keyInput, valueInput) {
    let tempField = [...fieldMedicalRecord];
    if (keyInput || valueInput) {
      let tempValue = {
        key: keyInput ? keyInput : fieldMedicalRecord[index].key,
        value: valueInput ? valueInput : fieldMedicalRecord[index].value,
      };

      tempField[index] = tempValue;
    }
    setFieldMedicalRecord(tempField);
  }

  function submitFieldHandle() {
    dispatch(updateMedicalRecordAction(medicalRecord, fieldMedicalRecord));
  }

  useEffect(() => {
    setFieldMedicalRecord(medicalRecord.records);
  }, [editMode, medicalRecord]);

  useEffect(() => {
    setEditMode(false);
  }, [medicalRecord.records]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <div className="w-full flex flex-col justify-center gap-[20px] px-[20px] border-blue-500 border-solid border-l-4">
        {editMode ? (
          <DynamicForm
            removeHandle={(index) => removeFieldHandle(index)}
            fieldList={fieldMedicalRecord}
            addHandle={(index) => addFieldHandle(index)}
            editHandle={(index, key, value) => editFieldHandle(index, key, value)}
            submitHandle={() => submitFieldHandle()}
          />
        ) : null}

        {!editMode
          ? fieldMedicalRecord.map((item, index) => {
              return (
                <div key={index} className="w-full flex flex-col gap-[5px] py-[20px]">
                  <MDTypography color="dark" fontSize="14px" fontWeight="bold">
                    {item.key}
                  </MDTypography>
                  <div className="w-full bg-gray-100 p-2 rounded-xl">
                    <MDTypography color="dark" fontSize="14px" fontWeight="regular">
                      {item.value}
                    </MDTypography>
                  </div>
                </div>
              );
            })
          : null}
      </div>
    </>
  );
}
