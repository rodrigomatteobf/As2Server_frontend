/* eslint-disable react/prop-types */
export const Modal = ({content, onClose}) => {
  return (
    <div className="container_dialog">
      <dialog open className="dialog">
        <textarea readOnly className="content_dialog" rows={12} value={content}></textarea>
        <button onClick={onClose} style={{width: "50px", margin: "auto"}}>Ok</button>
      </dialog>
    </div>
  )
}