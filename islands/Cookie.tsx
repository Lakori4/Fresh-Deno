import { useEffect, useState } from "preact/hooks";
import { FunctionComponent } from "preact";

const Cookie: FunctionComponent = () => {
  const [name, setName] = useState<string>("");

  useEffect(() => {
    const cookie = document.cookie.split("; ").find((row) => row.startsWith("name="));
    if (cookie) {
        const value = cookie.split("=")[1];
        setName(decodeURIComponent(value));
    }
  }, []);

  return (
    <div>
      <input
        type="text"
        placeholder={"Mete tu nombre"}
        onInput={(e) => setName(e.currentTarget.value)}
      />
      <button
        onClick={() => {
          const date = new Date();
          date.setTime(date.getTime() + 1 * 24 * 60 * 60 * 1000);
          document.cookie =
            `name=${name}; expires=${date.toUTCString()}; path=/`;
        }}
      >
        Crear cookie
      </button>

      <button
        type="button"
        onClick={() => {
          const date = new Date();
          date.setTime(date.getTime() - 1 * 24 * 60 * 60 * 1000);
          document.cookie =
            `name=${name}; expires=1; path=/`;
            document.cookie
        }}
      >
        Borrar Cookie
      </button>
    </div>
  );
};

export default Cookie;
