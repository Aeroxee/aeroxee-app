"use client";

import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import CustomEditor from "./custom-editor";
import Modal from "./modal";

export default function HeaderBlog() {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [fullName, setFullName] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const router = useRouter();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const response = await fetch("/api/blog", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fullName: fullName,
        title: title,
        content: content,
      }),
    });

    if (response.ok) {
      setIsLoading(false);
      alert("Berhasil menambahkan satu artikel.");
      setShowModal(false);
      router.refresh();
      return;
    } else {
      setIsLoading(false);
      alert("Gagal menambahkan satu artikel");
      setShowModal(false);
      router.refresh();
      return;
    }
  };

  return (
    <>
      <div className="my-5 flex items-center justify-between">
        <button
          type="button"
          onClick={() => setShowModal(true)}
          className="px-4 py-1 text-white bg-sky-600 hover:bg-sky-700 rounded-md"
        >
          Tambah Artikel
        </button>
      </div>
      <Modal open={showModal} onClose={() => setShowModal(false)}>
        <h1 className="text-lg font-extrabold text-white">Tambah artikel</h1>

        <form action="" className="mt-3" onSubmit={handleSubmit}>
          <div className="flex flex-col text-white mb-2">
            <label htmlFor="full_name">Nama lengkap</label>
            <input
              type="text"
              name="full_name"
              onChange={(e) => setFullName(e.target.value)}
              className="bg-transparent border border-gray-600 px-4 py-1 rounded-s"
            />
          </div>
          <div className="flex flex-col text-white mb-2">
            <label htmlFor="title">Judul</label>
            <input
              type="text"
              name="judul"
              onChange={(e) => setTitle(e.target.value)}
              className="bg-transparent border border-gray-600 px-4 py-1 rounded-s"
            />
          </div>
          <div className="flex flex-col text-white mb-2">
            <label htmlFor="title">Konten</label>
            <CustomEditor
              initialData="<h1>Tulis konten disini</h1>"
              onChange={(_event: any, editor: any) => {
                const data = editor.getData();
                setContent(data);
              }}
            />
          </div>

          <button
            type="submit"
            className="text-white px-4 py-1 bg-sky-600 hover:bg-sky-700 rounded-md flex gap-1 items-center"
          >
            {isLoading && (
              <FontAwesomeIcon icon={faSpinner} className="animate-spin" />
            )}
            <span>Simpan</span>
          </button>
        </form>
      </Modal>
    </>
  );
}
