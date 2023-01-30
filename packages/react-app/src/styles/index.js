const styles = {
  // App.js
  container: "flex justify-center min-h-screen sm:rem-1.6 rem-.6 bg-site-black",
  innerContainer:
    "flex justify-between items-center flex-col max-w-[128rem] w-full",
  header: "flex flex-row justify-between items-center w-full sm:py-10 py-6",
  exchangeContainer:
    "flex-1 flex justify-start items-center flex-col w-full mt-10",
  headTitle: "text-black font-poppins font-black text-5xl tracking-wide",
  subTitle: "text-dim-black font-poppins font-medium mt-3 text-base",
  exchangeBoxWrapper: "mt-10 w-full flex justify-center",
  exchangeBox:
    "relative md:max-w-[70rem] md:min-w-[50rem] min-w-full max-w-full gradient-border p-[.2rem] rounded-3xl",
  exchange:
    "w-full min-h-[40rem] bg-site-black backdrop-blur-[.4rem] rounded-3xl shadow-card flex p-10",

  // AmountIn & AmountOut
  amountContainer:
    "flex justify-between items-center flex-row w-full min-w-full bg-site-dim border-[.3rem] border-transparent hover:border-site-dim2 min-h-[9.6rem] sm:p-8 p-4 rounded-[2rem]",
  amountInput:
    "w-full flex-1 bg-transparent outline-none font-poppins font-black text-3xl text-black",
  currencyButton:
    "flex flex-row items-center bg-site-dim2 py-2 rem-.4 rounded-xl font-poppins font-bold text-2xl text-black",
  currencyList:
    "absolute z-10 right-0 bg-site-black border-[.1rem] border-site-dim2 w-full mt-2 rounded-lg min-w-[17rem] overflow-hidden",
  currencyListItem:
    "font-poppins font-medium text-2xl text-black hover:text-dim-black rem-.5 py-3 hover:bg-site-dim2 cursor-pointer",

  // Exchange
  actionButton:
    "border-none outline-none rem-.6 py-2 font-poppins font-bold text-lg rounded-2xl leading-[2.4rem] transition-all min-h-[5.6rem]",
  message: "font-poppins font-lg text-black font-bold mt-7",

  // WalletButton
  walletButton:
    "bg-site-pink border-none outline-none rem-.6 py-3 px-6 font-poppins font-bold text-3xl text-white rounded-3xl leading-[2.4rem] hover:bg-pink-600 transition-all ",

  // loader
  loader: "flex justify-center items-center flex-col w-full min-h-full",
  loaderImg: "w-56 h-56 object-contain",
  loaderText:
    "font-poppins font-normal text-dim-black text-3xl text-center mt-10",

  // balance
  balance: "w-full text-left mt-2 ml-2",
  balanceText: "font-poppins font-normal text-xl text-dim-black",
  balanceBold: "font-semibold text-black",
};

export default styles;
