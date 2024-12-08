import React, { useState } from "react";
import { auth } from "../../configs/firebaseConfig";
import { updateProfile } from "firebase/auth";

const AvatarSettings = ({ onClose }) => {
  const [newAvatar, setNewAvatar] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setNewAvatar(URL.createObjectURL(file));
    }
  };

  const handleUpload = async () => {
    if (newAvatar) {
      setLoading(true);
      try {
        await updateProfile(auth.currentUser, {
          photoURL: newAvatar,
        });
        await auth.currentUser.reload();
        onClose();
      } catch (error) {
        console.error("Ошибка при обновлении аватара: ", error);
      } finally {
        setLoading(false);
      }
    }
  };

  const handleRemoveAvatar = async () => {
    setLoading(true);
    try {
      await updateProfile(auth.currentUser, {
        photoURL: "/img/default_avatar.gif",
      });
      await auth.currentUser.reload();
      onClose();
    } catch (error) {
      console.error("Ошибка при удалении аватара: ", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="absolute right-0 mt-2 w-64 p-4 bg-white rounded-lg shadow-lg">
      <h2 className="text-lg font-bold mb-4">Изменить аватар</h2>
      <input type="file" accept="image/*" onChange={handleAvatarChange} />
      {newAvatar && (
        <img
          src={newAvatar}
          alt="Preview"
          className="mt-4 w-24 h-24 rounded-full object-cover"
        />
      )}
      <button
        onClick={handleUpload}
        disabled={loading}
        className={`mt-4 p-2 bg-blue-600 text-white rounded-md ${
          loading ? "opacity-50" : ""
        }`}
      >
        {loading ? "Загрузка..." : "Сохранить"}
      </button>
      <button
        onClick={handleRemoveAvatar}
        disabled={loading}
        className={`mt-2 p-2 bg-red-600 text-white rounded-md ${
          loading ? "opacity-50" : ""
        }`}
      >
        {loading ? "Удаление..." : "Удалить аватар"}
      </button>
      <button onClick={onClose} className="mt-2 text-red-600">
        Отменить
      </button>
    </div>
  );
};

export default AvatarSettings;
