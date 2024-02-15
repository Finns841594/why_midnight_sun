import { Divider, Link } from '@nextui-org/react';
import React from 'react';
import GithubIcon from '../icons/GithubIcon';

const Footer = () => {
  return (
    <div>
      <Divider />
      <div className="grid grid-cols-2 md:grid-cols-4 mt-4">
        <div className="md:col-start-2">
          <p className="text-sm text-slate-500">Contacts:</p>
          <Link
            href="https://github.com/Finns841594/why_midnight_sun"
            color="foreground"
          >
            <GithubIcon className="mr-2" color="foreground" />
            Github Repo
          </Link>
        </div>
        <div className="md:col-start-3">
          <p className="text-sm text-slate-500">Credit infos:</p>
          <p className="text-xs text-slate-500">
            3D assets selected from{' '}
            <a href="https://www.cgtrader.com/designers/syomapozdeev">
              syomapozdeev
            </a>
          </p>
          <p className="text-xs text-slate-500">
            Map from{' '}
            <a href="https://www.openstreetmap.org/">openstreetmap.org</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
