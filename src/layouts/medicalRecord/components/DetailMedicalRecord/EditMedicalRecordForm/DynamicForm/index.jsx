import React from "react";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";

export default function DynamicForm({
  fieldList,
  removeHandle,
  addHandle,
  editHandle,
  submitHandle,
}) {
  return (
    <>
      <form className="mb-[20px]">
        {fieldList.map((item, index) => {
          return (
            <div key={index} className="w-full flex flex-col gap-[5px] py-[20px]">
              <div className="w-full bg-gray-100 p-2 rounded-xl flex flex-col gap-[10px] relative">
                <div className="flex gap-[10px]">
                  <MDInput
                    fullWidth
                    required
                    label="Key"
                    onChange={(e) => {
                      editHandle(index, e.target.value, null);
                    }}
                    defaultValue={item.key}
                    multiline
                    rows={1}
                  />
                  <MDButton
                    variant="gradient"
                    onClick={() => {
                      removeHandle(index);
                    }}
                    color="primary"
                  >
                    Hapus
                  </MDButton>
                </div>

                <MDInput
                  fullWidth
                  required
                  label="Value"
                  onChange={(e) => {
                    editHandle(index, null, e.target.value);
                  }}
                  defaultValue={item.value}
                  multiline
                  rows={5}
                />
              </div>
            </div>
          );
        })}
        <div className="w-full flex gap-[10px] text-right justify-end ">
          <MDButton
            variant="gradient"
            onClick={() => {
              addHandle(String(fieldList.length));
            }}
            color="info"
          >
            Add Record
          </MDButton>
          <MDButton variant="gradient" type="button" onClick={() => submitHandle()} color="success">
            Save
          </MDButton>
        </div>
      </form>
    </>
  );
}
