import React from 'react'
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from '@nextui-org/react'

interface ButtonModalProps {
  data: string
  title: string// Cambié el tipo de data a una cadena de texto, ya que parece que la descripción es una cadena
}

export const ButtonModal: React.FC<ButtonModalProps> = ({ data, title }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [backdrop, setBackdrop] = React.useState('opaque')

  const backdrops = ['blur']

  const handleOpen = (backdrop: string) => {
    setBackdrop(backdrop)
    onOpen()
  }

  return (
    <>
      <div className="flex flex-wrap gap-3 my-5">
        {backdrops.map((b) => (
          <Button
            key={b}
            variant="flat"
            color="warning"
            onPress={() => { handleOpen(b) }}
            className="capitalize"
          >
            Descripción
          </Button>
        ))}
      </div>
      <Modal backdrop={isOpen ? 'blur' : 'opaque'} isOpen={isOpen} onClose={onClose}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">{title}</ModalHeader>
              <ModalBody>
                <p>{data}</p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Cerrar
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  )
}
