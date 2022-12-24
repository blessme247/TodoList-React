import React from "react";

const DeleteConfirmation = ({ info, brief, handleDelete, handleCancel, deleteButtonLabel, cancelButtonLabel }) => {
  return (
    <section className="tw-antialiased tw-bg-gray-200 tw-text-gray-900 tw-font-sans tw-overflow-x-hidden">
      <div className="tw-relative px-4 tw-min-h-screen tw-md:flex tw-md:items-center tw-md:justify-center">
        <div className="tw-bg-black tw-opacity-25 tw-w-full tw-h-full tw-absolute tw-z-10 tw-inset-0"  />
        <div className="tw-bg-white tw-rounded-lg tw-md:max-w-md tw-md:mx-auto tw-p-4 tw-fixed tw-inset-x-0 tw-bottom-10 tw-z-50 tw-mb-4 tw-mx-4 tw-md:relative">
          <div className="tw-md:flex tw-items-center">
            <div className="tw-rounded-full tw-border tw-border-gray-300 tw-flex tw-items-center tw-justify-center tw-w-16 tw-h-16 tw-flex-shrink-0 tw-mx-auto">
              <i className="tw-bx tw-bx-error tw-text-3xl" />
            </div>
            <div className="tw-mt-4 tw-md:mt-0 tw-md:ml-6 tw-text-center tw-md:text-left">
              <p className="tw-font-bold">{info}</p>
              <p className="tw-text-sm tw-text-gray-700 tw-mt-1">{brief}</p>
            </div>
          </div>
          <div className="tw-text-center tw-md:text-right tw-mt-4 tw-md:flex tw-md:justify-end">
            <button
              onClick={handleDelete}
              className="tw-block tw-w-full tw-md:inline-block tw-md:w-auto tw-px-4 tw-py-3 tw-md:py-2 tw-bg-red-200 tw-text-red-700 tw-rounded-lg tw-font-semibold tw-text-sm tw-md:ml-2 tw-md:order-2"
            >
              {deleteButtonLabel || "Yes"}
            </button>
            <button
              onClick={handleCancel}
              className="tw-block tw-w-full tw-md:inline-block tw-md:w-auto tw-px-4 tw-py-3 tw-md:py-2 tw-bg-gray-200 tw-rounded-lg tw-font-semibold tw-text-sm tw-mt-4
    tw-md:mt-0 tw-md:order-1"
            >
              {cancelButtonLabel || "Cancel"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeleteConfirmation;
