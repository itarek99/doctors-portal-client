const ConfirmationModal = ({ title, modalData, closeModal, successAction }) => {
  return (
    <div className=''>
      <input type='checkbox' id='confirmationModal' className='modal-toggle' />
      <div className='modal'>
        <div className='modal-box relative'>
          <h4 className='text-2xl mb-4'>{title}</h4>

          <div className='flex justify-end gap-4'>
            <label
              onClick={() => successAction(modalData)}
              htmlFor='confirmationModal'
              className='btn btn-error text-white btn-sm text-xs rounded'
            >
              Delete
            </label>
            <button onClick={() => closeModal()} className='btn btn-accent btn-sm text-xs rounded'>
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ConfirmationModal;
