import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const cercles: string[] = [
  "Bar",
  "CAP",
  "CPV",
  "Magellan",
  "Mons Mines",
  "Mutuelle des étudiants",
  "Peyresq",
  "Culturel",
  "Radio Extra",
  "Scientifique",
  "Sono-Danse-Musique",
  "Sports",
];

const locaux: string[] = [
  "Bar",
  "CAP",
  "400 - Radio Extra",
  "500 - Magellan",
  "9/10 - Local de projection",
  "11/12 - Bibli",
  "700 - Scientifique",
  "Mutuelle des étudiants",
];

export default function NavMenu() {
  return (
    <NavigationMenu>
      <NavigationMenuList className="gap-2">
        <NavigationMenuItem>
          <NavigationMenuTrigger>
            <a href="/cercles">Cercles</a>
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {cercles.map((cercle, index) => (
                <li className="font-normal text-sm" key={index}>
                  <NavigationMenuLink asChild>
                    <a
                      href={`/cercles/${cercle
                        .toLowerCase()
                        .replaceAll(" ", "-")
                        .replaceAll("é", "e")}`}
                    >
                      {cercle}
                    </a>
                  </NavigationMenuLink>
                </li>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem className="font-medium text-sm">
          <NavigationMenuTrigger>La Cité Houzeau</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {locaux.map((local, index) => (
                <li className="font-normal text-sm" key={index}>
                  <NavigationMenuLink asChild>
                    <a
                      href={`/${local
                        .toLowerCase()
                        .replaceAll(" - ", "-")
                        .replaceAll(" ", "-")
                        .replaceAll("/", "-")
                        .replaceAll("é", "e")}`}
                    >
                      {local}
                    </a>
                  </NavigationMenuLink>
                </li>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Folklore</NavigationMenuTrigger>
          <NavigationMenuContent>
            <NavigationMenuLink>Link</NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Étudier en Polytech</NavigationMenuTrigger>
          <NavigationMenuContent>
            <NavigationMenuLink>Link</NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem className="font-medium text-sm">
          <NavigationMenuLink>Contact</NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

function Cercles() {
  return <a href="cercles">Cercles</a>;
}
