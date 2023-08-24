import { Typography } from "@material-tailwind/react";
 
export function SimpleFooter() {
  return (
    <footer className="flex w-full px-5  flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 border-t border-blue-gray-50 py-6 text-center md:justify-between">
      <Typography color="blue-gray" className="font-normal">
        &copy; 2023 Material Tailwind
      </Typography>
      <ul className="flex font-bold flex-wrap items-center gap-y-2 gap-x-8">
       <Li nome="About Us"/>
        <Li nome= "License"/>
        <Li nome= "Contribute"/>
        <Li nome= "Contact Us"/>
      </ul>
    </footer>
  );
}

    function Li ({nome}){
    return(
        <li>
        <Typography
          as="a"
          href="#"
          color="blue-gray"
          className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
        >
          {nome}
        </Typography>
      </li>
    )
}