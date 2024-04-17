import React from 'react';
import { Footer as FooterComponent, FooterTitle, FooterLink, FooterLinkGroup, FooterIcon, FooterDivider } from "flowbite-react";
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";
import logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <FooterComponent container className='mt-20 bg_foot'>
      <div className="w-full">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div className="space-y-4 mb-8 ml-5">
            <a href="/" className="block">
              <img src={logo} className="w-20 inline-block" alt="Logo" />
            </a>
            <div>
              <p className=" text-sm mb-1">Copyright © 2024 Eventhub Ltd.</p>
              <p className=" text-sm mb-4">All rights reserved</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <FooterTitle title="About" className='mb-5'/>
              <FooterLinkGroup col>
                <FooterLink href="/">Eventhub</FooterLink>
                <FooterLink href="#">Tailwind CSS</FooterLink>
              </FooterLinkGroup>
            </div>
            <div>
              <FooterTitle title="Follow us" className='mb-5' />
              <FooterLinkGroup col>
                <FooterLink href="#">Github</FooterLink>
              </FooterLinkGroup>
            </div>
            <div>
              <FooterTitle title="Legal" className='mb-5' />
              <FooterLinkGroup col>
                <FooterLink href="#">Privacy Policy</FooterLink>
                <FooterLink href="#">Terms &amp; Conditions</FooterLink>
              </FooterLinkGroup>
            </div>
          </div>
        </div>
        <FooterDivider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <div className="flex-grow text-sm text-gray-500">
          </div>
          <div className="flex items-center space-x-6">
            <FooterIcon href="#" icon={BsFacebook} />
            <FooterIcon href="#" icon={BsInstagram} />
            <FooterIcon href="#" icon={BsTwitter} />
            <FooterIcon href="#" icon={BsGithub} />
            <FooterIcon href="#" icon={BsDribbble} />
          </div>
        </div>
      </div>
    </FooterComponent>
  );
};

export default Footer;
