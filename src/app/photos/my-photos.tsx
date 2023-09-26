'use client'

import React, { useState } from 'react'
import { images } from '../movies'
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from '@nextui-org/react'
import ButtonUp from '../components/button-up'

export default function MyPhotos () {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const { isOpen, onOpen, onClose } = useDisclosure()

  const openModal = (image: string) => {
    setSelectedImage(image)
    onOpen()
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 p-7">
      {images.map((img, index) => (
        <div
          key={index}
          className="relative group cursor-pointer rounded-lg overflow-hidden shadow-md hover:shadow-lg transform hover:scale-105 transition-transform duration-300"
          onClick={() => { openModal(img.src) }}
        >
          <img
            src={img.src}
            alt={`Image ${index}`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-25 transition-opacity duration-300">
          </div>
        </div>
      ))}

      {/* Modal */}
      <Modal size="full" isOpen={isOpen} onClose={onClose}
      style={{ zIndex: 1000 }}>
        <ModalContent>
          <ModalHeader>Imagen en pantalla completa</ModalHeader>
          <ModalBody>
            {selectedImage && (
              <img
                src={selectedImage}
                alt="Imagen en pantalla completa"
                className="w-full h-full object-contain"
              />
            )}
          </ModalBody>
          <ModalFooter>
            <Button color="danger" variant="shadow" onClick={onClose}>
              Cerrar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <ButtonUp/>
    </div>
  )
}
