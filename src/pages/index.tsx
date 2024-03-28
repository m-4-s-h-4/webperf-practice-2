import Main from "./components/Main";

export default function Home() {
  return (
    <>
      <div>
        <Main />
      </div>
      <div>
        <button
          onClick={() => {
            throw new Error("Sentry Frontend Error");
          }}
        >
          Throw error
        </button>
      </div>
    </>
  );
}
