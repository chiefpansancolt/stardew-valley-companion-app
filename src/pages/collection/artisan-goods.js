import { useContext } from "react";
import { useRouter } from "next/router";
import CharacterContext from "@/components/characterContext";
import LayoutContainer from "@/components/layouts/layout-container";
import LayoutMain from "@/components/layouts/layout-main";
import Base from "@/components/page-headings/base";
import Tabs from "@/components/tabs";
import ArtisanGoodsTableView from "@/components/tables/artisan-goods-table-view";
import { artisanGoodsTabs } from "@/data/collection-tabs";

export default function ArtisanGoods() {
  const { character } = useContext(CharacterContext);
  const router = useRouter();
  const { currentTab } = router.query;
  return (
    <>
      <Base title="Artisan Goods" showButtons={true} />
      <LayoutContainer>
        <LayoutMain isAlone={true}>
          <div className="mt-4 bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 sm:px-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900">Artisan Goods</h3>
              <p className="mt-1 text-sm text-gray-500">
                Artisan Goods are items that can be created on your farm by various Artisan
                Equipment. They can take anywhere from a few hours to a few days (in-game time) to
                be processed. Most Artisan Goods do not have a star quality, so the star quality of
                the ingredients used is ignored. The only exception is the Ostrich Egg, the star
                quality of whose artisan product will match that of the ingredient.
              </p>
            </div>
            <div className="border-t border-gray-200">
              {character.artisanGoods && (
                <Tabs
                  tabs={artisanGoodsTabs}
                  currentTab={currentTab}
                  current="/collection/artisan-goods"
                  collection={character.artisanGoods}
                >
                  {(!currentTab || currentTab === "All Artisan Goods") && (
                    <ArtisanGoodsTableView collection={character.artisanGoods.fullList} />
                  )}
                  {currentTab === "Shipped" && (
                    <ArtisanGoodsTableView collection={character.artisanGoods.shippedList} />
                  )}
                  {currentTab === "To-Be Shipped" && (
                    <ArtisanGoodsTableView collection={character.artisanGoods.unshippedList} />
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
