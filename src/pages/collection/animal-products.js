import { useContext } from "react";
import { useRouter } from "next/router";
import CharacterContext from "@/components/characterContext";
import LayoutContainer from "@/components/layouts/layout-container";
import LayoutMain from "@/components/layouts/layout-main";
import Base from "@/components/page-headings/base";
import Tabs from "@/components/tabs";
import AnimalProductsTableView from "@/components/tables/animal-products-table-view";
import { animalProductTabs } from "@/data/collection-tabs";

export default function AnimalProducts() {
  const { character } = useContext(CharacterContext);
  const router = useRouter();
  const { currentTab } = router.query;
  return (
    <>
      <Base title="Animal Products" showButtons={true} />
      <LayoutContainer>
        <LayoutMain isAlone={true}>
          <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 sm:px-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900">Animal Products</h3>
              <p className="mt-1 text-sm text-gray-500">
                Baby farm animals must first mature into adults before they are able to produce
                animal products. Each morning, adult animals that live in coops (chickens, ducks,
                rabbits and dinosaurs) have a chance of producing products that can be gathered from
                the floor of their building. Using the Milk Pail, cows can usually be milked daily,
                and goats can usually be milked once every two days. Sheep can be shorn with the
                Shears when their wool grows in, and pigs can be let outside to dig up truffles that
                you can then pick up from the barnyard.
              </p>
            </div>
            <div className="border-t border-gray-200">
              {character.animalProducts && (
                <Tabs
                  tabs={animalProductTabs}
                  currentTab={currentTab}
                  current="/collection/animal-products"
                  collection={character.animalProducts}
                >
                  {(!currentTab || currentTab === "All Animal Products") && (
                    <AnimalProductsTableView
                      collection={character.animalProducts.fullList}
                      profession={character.character.skills.farming.profession1}
                    />
                  )}
                  {currentTab === "Shipped" && (
                    <AnimalProductsTableView
                      collection={character.animalProducts.shippedList}
                      profession={character.character.skills.farming.profession1}
                    />
                  )}
                  {currentTab === "To-Be Shipped" && (
                    <AnimalProductsTableView
                      collection={character.animalProducts.unshippedList}
                      profession={character.character.skills.farming.profession1}
                    />
                  )}
                </Tabs>
              )}
            </div>
          </div>
        </LayoutMain>
      </LayoutContainer>
    </>
  );
}
