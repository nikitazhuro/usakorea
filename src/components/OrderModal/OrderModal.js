import { Button, Modal, Row } from "antd";

import './orderModal.css';

import { createOrderRequest } from '../../lib/api/orderApi';

const OrderModal = ({
  isOpen,
  setIsOpen,
}) => {
  const confirm = async () => {
    const config = {
      name: 'Nikita',
      number: '+375203939399'
    }

    await createOrderRequest(config);

    onClose();
  }

  const onClose = () => {
    setIsOpen(false);
  }

  return (
    <Modal
      centered
      open={isOpen}
      onOk={confirm}
      onCancel={onClose}
      footer={
        <Row>
          <Button onClick={confirm}>Подтвердить</Button>
        </Row>
      }
    >
      <p>some contents...</p>
      <p>some contents...</p>
      <p>some contents...</p>
    </Modal>
  )
}

export default OrderModal;
