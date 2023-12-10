 import LayoutProvider from "./provider/LayoutProvider/LayoutProvider";
 import TheThemeProvider from "./provider/Themeprovider/TheThemeProvider";

function App() {
  return (
    <>
      <TheThemeProvider>
        <LayoutProvider />
      </TheThemeProvider>
    </>
  );
}

export default App;
