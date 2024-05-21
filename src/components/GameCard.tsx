import React from "react";
import { Game } from "../hooks/UseGames";
import { Card, CardBody, HStack, Heading, Image, Text } from "@chakra-ui/react";
import { platform } from "os";
import PlatformIconList from "./PlatformIconList";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card borderRadius={10} overflow={"hidden"}>
      <Image src={game.background_image} />
      <CardBody>
        <Heading fontSize={"2xl"}>{game.name}</Heading>
        <HStack marginY={2}>
          <PlatformIconList
            platforms={game.parent_platforms.map(
              (platform) => platform.platform
            )}
          ></PlatformIconList>
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GameCard;
