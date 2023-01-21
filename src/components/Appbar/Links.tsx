import React from 'react'
import AnchorLink from "react-anchor-link-smooth-scroll";
import { SelectedPage } from '../shared/enum_types';

type Props = {
  page: string;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Links = ({ page, selectedPage, setSelectedPage }: Props) => {
    const lowerCasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage;
    return (
        <AnchorLink
          className={`${selectedPage === lowerCasePage ? "text-white" : "text-white"}
            transition duration-500 hover:text-white
          `}
          href={`#${lowerCasePage}`}
          onClick={() => setSelectedPage(lowerCasePage)}
        >
          {page}
        </AnchorLink>
      );
}

export default Links