export default function Card({ title, content }) {
    return (
        <>
            <input type="checkbox" id="my-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">{title}</h3>
                    <div>{content}</div>
                    <div className="modal-action">
                        <label htmlFor="my-modal" className="btn">
                            Close
                        </label>
                    </div>
                </div>
            </div>
        </>
    )
}