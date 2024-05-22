import {
  HStack,
  List,
  ListItem,
  Skeleton,
  SkeletonText,
} from "@chakra-ui/react";

const GenreListSkeleton = () => {
  return (
    <List>
      {[...Array(9)].map((_, index) => (
        <ListItem key={index}>
          <HStack paddingY="5px">
            <Skeleton boxSize="32px" borderRadius={8} />
            <SkeletonText noOfLines={1} width="60px" />
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreListSkeleton;
