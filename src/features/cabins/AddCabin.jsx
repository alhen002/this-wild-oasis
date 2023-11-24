import CreateCabinForm from "./CreateCabinForm.jsx";
import Modal from "../../ui/Modal.jsx";
import Button from "../../ui/Button.jsx";

export default function AddCabin() {
  return (
    <div>
      <Modal>
        <Modal.Open opens={"cabin-form"}>
          <Button>Add new cabin</Button>
        </Modal.Open>
        <Modal.Window name={"cabin-form"}>
          <CreateCabinForm />
        </Modal.Window>
      </Modal>
    </div>
  );
}
