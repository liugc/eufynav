import { useEffect, useState } from "react";
import { Icon, Spinner } from "@shopify/polaris";
import {
  SearchMajor,
  CustomersMajor,
  CartMajor,
  CirclePlusMinor,
} from "@shopify/polaris-icons";
import { cloneDeep } from "lodash";
import classNames from "classnames";
import s from "./index.module.css";
import Modal from "./Modal";
import { Button, Form, Input } from "antd";

const FormLayout = ({ children, ...props }) => {
  return <div {...props}>{children}</div>;
};

const TextField = ({ label, value, onChange }) => {
  return (
    <Form.Item label={label}>
      <Input value={value} onChange={(e) => onChange(e.target.value)} />
    </Form.Item>
  );
};

const Image = ({ ...props }) => {
  return <img {...props} />;
};

const Picture = ({ ...props }) => {
  return <img {...props} src={props.source} />;
};

const Navbar = () => {
  const [current, setCurrent] = useState(1);
  const [currentChild, setCurrentChild] = useState(0);
  const [currentSubTab, setCurrentSubTab] = useState(0);
  const [showSearch, setShowSearch] = useState(false);
  const [leftBarShow, setLeftBarShow] = useState(false);
  const [leftBarSearchShow, setLeftBarSearchShow] = useState(false);
  const [leftBarIdx, setLeftBarIdx] = useState(0);
  const [leftBarSubIdx, setLeftBarSubIdx] = useState(0);
  const [leftBarThdIdx, setLeftBarThdIdx] = useState(0);
  const [leftBarSubTitle, setLeftBarSubTitle] = useState("");
  const [leftBarThdTitle, setLeftBarThdTitle] = useState("");
  const [lived, setLived] = useState(false);

  const [loading, setLoading] = useState(false);
  const [metafields, setMetafields] = useState({
    id: 22157910048937,
    value: "",
  });
  const [headerSetting, setHeaderSetting] = useState([]);
  const [currentSubChild, setCurrentSubChild] = useState(0);
  const [currentLastChild, setCurrentLastChild] = useState(0);
  const [currentProductIndex, setCurrentProductIndex] = useState(0);
  const [index, setIndex] = useState();
  const [subIndex, setSubIndex] = useState();
  const [isEditLink, setIsEditLink] = useState(false);
  const [isSubEditLink, setIsSubEditLink] = useState(false);
  const [isEditTab, setIsEditTab] = useState(false);
  const [isEditLinkMore, setIsEditLinkMore] = useState(false);
  const [isEditMore, setIsEditMore] = useState(false);
  const [isEditLabel, setIsEditLabel] = useState(false);
  const [isEditCollect, setIsEditCollect] = useState(false);
  const [isEditCollectProduct, setIsEditCollectProduct] = useState(false);
  const [label, setLabel] = useState("");
  const [href, setHref] = useState("");
  const [tag, setTag] = useState("");
  const [sku, setSku] = useState("");
  const [title, setTitle] = useState("");
  const [img, setImg] = useState("");
  const [more, setMore] = useState("");
  const [description, setDescription] = useState("");
  const [allLabel, setAllLabel] = useState("");
  const [allHref, setAllHref] = useState("");
  const [moreLabel, setMoreLabel] = useState("");
  const [moreHref, setMoreHref] = useState("");
  const [textarea, setTextarea] = useState("");
  const [inputBox, setInputBox] = useState("");

  const CART = null;
  const locale = "us";
  const BRAND = "eufy";
  const livestream = {};
  const userCenterSetting = {
    signIn: "Sign in",
    signUp: "Sign up",
    orderTrack: "Order Track",
    orderTrackHref: "/apps/aftership",
    referralHref: "https://beta.eufy.com/referral-new",
    get$40: "Give a Gift, Get a Reward",
  };
  const shopCommon = {
    feature_products: "Feature Products",
    all_series: "All Series",
    coming_soon: "Coming Soon",
    product_detail: "Product Detail",
    soldOut: "Sold Out",
    all: "All",
    withFreeGift: "With Free Gift",
    freeGift: "Free Gift",
    all_iconfont: "&#xe616;",
    all_icon:
      "https://cdn.shopify.com/s/files/1/0517/6767/3016/files/Chargers_35576f17-05b5-453c-b74b-91d2d96a9d83.svg?v=1638431238",
    copy: "COPY",
    copied: "COPIED",
    free: "FREE",
    products: "Products",
    scene: "Scene",
    intro_video: "Intro video",
    model_view: "3D view",
    learn_more: "Learn More",
    check_more: "Check More",
    load_more: "Load More",
    hreflang: "en-us",
    learn_less: "Learn Less",
    add_to_Cart: "Add to cart",
    addbtn: "Add",
    search: "search",
    search_title: "Search our shop",
    search_placeholder: "What are you looking for?",
    buy_now: "Buy it now",
    shop_now: "Shop now",
    not_available: "Not Available",
    captcha_placeholders: "Enter Captcha",
    policy_text:
      "I agree to the <a href='/policies/terms' target='_blank' rel='noopener noreferrer'>terms of use</a> and <a href='/policies/privacy-policy' target='_blank' rel='noopener noreferrer'>privacy policy</a>.",
    use_placeholders: "Email Address",
    submit_btn_txt: "Sign up",
    info_fill_email: "Please enter your email address.",
    info_err_email:
      "Please enter a valid email address (Example: name@domain.com).",
    info_seccess: "Welcome to Anker",
    info_select_policy: "Please agree to the Terms of Use and Privacy Policy.",
    info_fill_captcha: "Please enter the captcha.",
    orders_tip:
      "<div style='margin: 1rem 0; background: #ccc; padding: 2rem; border-radius: 10px;'>As a precautionary health measure for our support specialists in light of COVID-19, we're operating width a limited term. If yoy need help with a product whose support you had trouble reaching over the phone, consult its <a>prodxst-specific Help Center</a></div>",
    out_stock_notify: {
      btnText: "Notify Me beta",
      success: "Success!",
      title: "Email me when available",
      subTitle:
        "Leave your email address and we will notify you when the product is back in stock.",
      tipText:
        "Your email address will be only used to notify you of stock information. We don&apos;t share your information with anybody else.",
      submitBtnText: "Email me when available",
      optional:
        "(Optional) Join our Ankertest email list to get special offers and more.",
    },
    active_notify: {
      btnText: "Notify Me",
      success: "Success!",
      title: "Email me when available",
      subTitle:
        "Leave your email address and we will notify you when the product is back in stock.",
      tipText:
        "Your email address will be only used to notify you of stock information. We don&apos;t share your information with anybody else.",
      submitBtnText: "Email me when available",
      optional:
        "(Optional) Join our Anker email list to get special offers and more.",
    },
    tagToDescription: {
      new: "New Released",
      recommend: "Recommand",
    },
  };

  const setMetafield = () => {
    try {
      const metafield = JSON.parse(textarea);
      setHeaderSetting(metafield);
    } catch (e) {
      console.log(e);
    }
  };

  // const s = {};

  /* useAppQuery({
    url:
      "/api/metafield?" +
      new URLSearchParams({
        namespace: "eufy_v3",
        key: "header",
      }),
    reactQueryOptions: {
      onSuccess: (data) => {
        setMetafields(data[0]);
        setHeaderSetting(JSON.parse(data[0].value));
      },
    },
  }); */

  const updateMenus = (metafield, cb) => {
    setTextarea(JSON.stringify(metafield));
    setHeaderSetting(metafield);
    cb && cb();
  };

  const handleSearch = (val) => {
    location.href = handleMenuUrl(`/search?q=${val}`);
  };

  const getLeftBarData = (level) => {
    const subData =
      headerSetting?.filter((item) => item.label == leftBarSubTitle)?.[0] || {};
    const thdData =
      subData?.tabs?.filter((item) => item.label == leftBarThdTitle)?.[0] || {};

    if (level == 2) {
      return subData;
    } else if (level == 3) {
      return thdData;
    }
  };

  const handleHideMega = () => {
    /* setCurrent(100);
    setCurrentChild(0);
    setCurrentSubTab(0); */
  };

  const setMenuParams = (url, label, val) => {
    if (url.includes("?")) {
      return `${url}&${label}=${val}`;
    } else {
      return `${url}?${label}=${val}`;
    }
  };

  const getThemeUrl = (link, locale, buried = "") => {
    const I18N_THEME_DOMAIN = {};
    if (link?.includes("http")) return link + buried;
    return `https://${I18N_THEME_DOMAIN[locale]}${link}${buried}`;
  };

  const handleMenuUrl = (href, is_custom_storefront, label, val) => {
    return undefined;
    let link = href;
    if (!href) {
      href = undefined;
      return href;
    }
    if (!href.includes("http")) {
      if (is_custom_storefront) {
        link = `/${locale}/${href || ""}`;
      } else {
        link = getThemeUrl(href, locale);
      }
    }

    return label && val ? setMenuParams(link, label, val) : link;
  };

  const Logo = () => {
    return (
      <svg
        width="49"
        height="24"
        viewBox="0 0 49 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M13.2755 11.0722C13.1595 11.0722 13.0447 11.0949 12.9375 11.1393C12.8303 11.1836 12.7329 11.2486 12.6508 11.3306C12.5688 11.4126 12.5037 11.51 12.4593 11.6172C12.4149 11.7243 12.392 11.8392 12.392 11.9552V12.029C12.3961 12.7412 12.2525 13.4465 11.9703 14.1004C11.4307 15.3774 10.4146 16.3939 9.13783 16.934C8.48347 17.2154 7.77811 17.3588 7.06583 17.3552C6.94338 17.3552 6.83694 17.3512 6.73795 17.3432C6.63895 17.3352 6.52451 17.322 6.40091 17.3037C5.76403 17.2215 5.14798 17.0216 4.58412 16.7143C3.46371 16.1095 2.59244 15.1291 2.12358 13.9453C1.62433 12.6631 1.64692 11.2365 2.18652 9.97071C2.4619 9.34058 2.8497 8.76586 3.33096 8.27466C3.81154 7.78696 4.38104 7.39577 5.0087 7.12221C5.65737 6.83993 6.35785 6.69629 7.06526 6.70049C7.77252 6.69558 8.47339 6.83458 9.12525 7.10905C9.67255 7.34261 10.1775 7.6649 10.6199 8.06294L7.41546 11.2914C7.32063 11.3869 7.24915 11.503 7.20659 11.6307C7.17547 11.7211 7.15961 11.8161 7.15967 11.9117C7.15968 12.0761 7.20575 12.2372 7.29267 12.3768C7.37958 12.5164 7.50385 12.6288 7.6514 12.7014C7.79895 12.7739 7.96388 12.8037 8.12749 12.7873C8.29109 12.7709 8.44684 12.709 8.57706 12.6086C8.60764 12.5849 8.63669 12.5593 8.66404 12.532L12.3411 8.83715C12.4144 8.76734 12.4847 8.69295 12.4859 8.6918C12.6314 8.51068 12.71 8.28496 12.7085 8.05264C12.7071 7.82033 12.6256 7.59562 12.4779 7.41633L12.0773 7.01578C11.4237 6.36293 10.6502 5.84241 9.79932 5.48281C8.93468 5.1173 8.00511 4.93026 7.0664 4.9329C6.13188 4.92964 5.20649 5.11675 4.34665 5.48281C3.49387 5.84929 2.71615 6.37016 2.05262 7.01921C1.40653 7.67917 0.891743 8.45591 0.53567 9.30808C0.177894 10.169 -0.00420453 11.0927 7.36695e-05 12.025C-0.00372142 12.8944 0.158044 13.7567 0.476731 14.5656C1.09171 16.1489 2.24713 17.4634 3.73838 18.2765C4.49887 18.6923 5.33123 18.9605 6.19148 19.0667C6.3414 19.085 6.48655 19.0989 6.62694 19.1085C6.76999 19.1182 6.91648 19.1222 7.06469 19.1222C8.00103 19.1257 8.92884 18.9441 9.79474 18.5877C10.6527 18.2341 11.429 17.7083 12.0756 17.0428C12.7352 16.3863 13.26 15.6072 13.6206 14.7493C13.9774 13.8879 14.1593 12.9642 14.1556 12.0318V11.958C14.1562 11.7239 14.0639 11.4991 13.8989 11.333C13.7339 11.1669 13.5097 11.0731 13.2755 11.0722Z"
          fill="inherit"
        />
        <path
          d="M26.3125 5.59429C26.2258 5.43305 26.0919 5.30217 25.9287 5.21918C25.7655 5.13619 25.5809 5.10506 25.3996 5.12996C25.2182 5.15486 25.0488 5.23461 24.914 5.35851C24.7793 5.48241 24.6856 5.64454 24.6456 5.82318C24.6312 5.88565 24.624 5.9496 24.6244 6.01372V13.6431C24.6244 15.7866 23.393 17.3133 21.1694 17.3133C18.9457 17.3133 17.712 15.7866 17.712 13.6431V5.99827C17.715 5.8804 17.6944 5.76311 17.6514 5.65333C17.6083 5.54355 17.5438 5.44349 17.4614 5.35906C17.3791 5.27462 17.2808 5.20752 17.1721 5.16171C17.0635 5.11589 16.9467 5.09229 16.8288 5.09229C16.7109 5.09229 16.5942 5.11589 16.4855 5.16171C16.3769 5.20752 16.2785 5.27462 16.1962 5.35906C16.1139 5.44349 16.0493 5.54355 16.0063 5.65333C15.9632 5.76311 15.9426 5.8804 15.9456 5.99827V13.5893C15.9456 16.6707 17.767 18.9482 21.1705 18.9482C24.5741 18.9482 26.4217 16.6707 26.4217 13.5893V6.01372C26.4218 5.86686 26.3842 5.72245 26.3125 5.59429Z"
          fill="inherit"
        />
        <path
          d="M47.7754 5.17962C47.6331 5.17975 47.4933 5.21671 47.3696 5.2869C47.2458 5.3571 47.1424 5.45813 47.0693 5.58017L47.0046 5.71751L42.9917 16.3036L38.8562 5.75127C38.8562 5.75585 38.815 5.64026 38.7893 5.59047C38.6918 5.40308 38.5264 5.25996 38.327 5.19035C38.1275 5.12074 37.909 5.12988 37.7161 5.21591C37.5232 5.30193 37.3703 5.45836 37.2888 5.65324C37.2073 5.84812 37.2033 6.06677 37.2775 6.26455C37.2809 6.27428 37.2844 6.28457 37.2884 6.2943L42.1345 18.4442C42.1345 18.4442 41.7419 19.5349 41.5972 19.8931C41.2189 20.8298 40.6089 21.8529 39.9022 22.1442C39.3667 22.3645 38.9043 22.3519 38.613 22.3519C38.4053 22.3519 38.2669 22.3845 38.1347 22.4664C38.0132 22.5423 37.913 22.6479 37.8435 22.7732C37.774 22.8986 37.7376 23.0395 37.7376 23.1828C37.7376 23.6211 38.0643 23.8837 38.4912 23.9759C38.5861 23.988 38.6816 23.9949 38.7773 23.9965C40.9809 23.9965 42.1734 22.8589 43.2663 20.1054C43.2663 20.1054 48.5341 6.33894 48.5553 6.2737C48.5616 6.25368 48.5679 6.23307 48.5736 6.2119C48.6059 6.08991 48.6097 5.96213 48.5847 5.83843C48.5598 5.71473 48.5067 5.59844 48.4296 5.49854C48.3525 5.39865 48.2534 5.31782 48.1401 5.26232C48.0267 5.20682 47.9022 5.17813 47.776 5.17848L47.7754 5.17962Z"
          fill="inherit"
        />
        <path
          d="M36.2041 0.529621C36.1073 0.36268 35.9535 0.236295 35.7709 0.173701H35.7641C35.7446 0.167407 35.7246 0.161113 35.7068 0.156535C35.494 0.103319 34.884 0.0163404 34.2191 0.00146271C31.1623 -0.0643424 29.2448 2.09349 29.1836 5.80948V18.0767C29.1842 18.3107 29.2765 18.5351 29.4407 18.7017C29.605 18.8683 29.828 18.9638 30.0619 18.9677C30.2959 18.9716 30.522 18.8835 30.6917 18.7225C30.8614 18.5615 30.9611 18.3403 30.9695 18.1065V7.16621H34.0051H34.0285H34.068C34.2797 7.1486 34.4765 7.05 34.6173 6.89097C34.7581 6.73193 34.8322 6.52469 34.8241 6.31241C34.816 6.10013 34.7263 5.89916 34.5738 5.75133C34.4212 5.6035 34.2175 5.52021 34.0051 5.5188H30.9683C31.0736 3.0142 31.98 1.65575 34.2717 1.65575C34.8308 1.65575 35.1249 1.73529 35.4963 1.73529H35.5003C35.5445 1.73516 35.5886 1.73211 35.6324 1.72613L35.6708 1.72041H35.6782C35.802 1.69419 35.9177 1.63904 36.0161 1.55948C36.1144 1.47991 36.1925 1.3782 36.244 1.26265C36.2954 1.14711 36.3188 1.02102 36.3122 0.894701C36.3055 0.768386 36.2691 0.645436 36.2058 0.535915L36.2041 0.529621Z"
          fill="inherit"
        />
      </svg>
    );
  };

  const MainNavLink = ({ item, index }) => {
    const url = handleMenuUrl(
      item.href,
      false,
      "ref",
      `navimenu_${index + 1}_copy`
    );
    return (
      <li
        className={s[`mainNav${item.mode}Item`]}
        onMouseEnter={() => {
          if (!showSearch) {
            setCurrent(index);
          }
        }}
        onMouseLeave={() => handleHideMega()}
        onClick={() => {
          if (item.type == "link") {
            setLabel(item.label);
            setHref(item.href);
            setIsEditLink(true);
          }
        }}
      >
        {
          <a
            className={`${s.mainNavLink} ${current == index ? s.actived : ""}`}
            href={url}
          >
            <span className={s.mainNavLinkText}>{item.label}</span>
            {item.tag ? <span className={s.headerTag}>{item.tag}</span> : ""}
          </a>
        }

        {item.type != "link" && (
          <MegaWrapper item={item} current={current} index={index} />
        )}
      </li>
    );
  };

  const MegaProductContain = ({ tab, index, refidx, seeMore }) => {
    const { list, links, more } = tab;
    const moreLink = more || seeMore;
    const listLen = list && list.length > 4 ? 4 : list.length;
    const linksLen = (links && links.length) || 0;
    return (
      <div
        className={`${s.megaProductContain} ${
          currentSubTab == index ? s.actived : ""
        }`}
      >
        <ul className={s.megaProductList}>
          {list &&
            list.map((item, idx) => {
              // if (idx > 3) return
              return (
                <li
                  key={idx}
                  className={s.megaProductItem}
                  onClick={() => {
                    setSku(item.sku);
                    setTitle(item.title || item.label);
                    setTag(item.tag);
                    setImg(item.img);
                    setHref(item.href);
                    setCurrentSubChild(index);
                    setCurrentLastChild(idx);
                    setIsEditTab(true);
                  }}
                >
                  <a
                    href={handleMenuUrl(
                      item.href || `/products/${item.sku}`,
                      false,
                      "ref",
                      `navimenu_${current + 1}_${refidx}_${idx + 1}_img`
                    )}
                  >
                    <Image
                      className={s.megaProductImg}
                      loading="lazy"
                      src={item.img}
                      alt={item.title || item.label || ""}
                      width={180}
                      height={180}
                    />
                    <div className={s.megaProductInfo}>
                      <p className={s.megaProductTitle}>
                        {item.title || item.label}
                      </p>
                      <p className={s.megaProductTag}>{item.tag}</p>
                    </div>
                  </a>
                </li>
              );
            })}
          <li className={classNames(s.megaProductItem, s.megaProductAdd)}>
            <Button
              // plain
              // monochrome
              icon={CirclePlusMinor}
              onClick={() => {
                setSku();
                setTitle();
                setTag();
                setImg();
                setHref();
                setCurrentSubChild(index);
                setCurrentLastChild(list?.length || 0);
                setIsEditTab(true);
              }}
            >
              Add
            </Button>
          </li>
        </ul>
        <div className="flex items-center justify-between pt-6">
          {links && links.length && (
            <div className={s.megaCollectLinks}>
              {links.map((item, idx) => {
                return (
                  <div key={idx}>
                    <a
                      className={s.megaCollectLink}
                      href={handleMenuUrl(
                        item.href,
                        false,
                        "ref",
                        `navimenu_${current + 1}_${refidx}_${
                          listLen + idx + 1
                        }_copy`
                      )}
                    >
                      <span>{item.label}</span>
                    </a>
                  </div>
                );
              })}
            </div>
          )}
          {!links && <div></div>}
          {moreLink && (
            <div>
              <Button className={s.megaCollectMore} variant="secondaryBlack">
                <a
                  href={handleMenuUrl(
                    moreLink,
                    false,
                    "ref",
                    `navimenu_${current + 1}_${refidx}_${
                      listLen + linksLen + 1
                    }_copy`
                  )}
                ></a>
                <span>{shopCommon.see_more}</span>
              </Button>
            </div>
          )}
        </div>
      </div>
    );
  };

  const MegaCollectContain = ({ tab, index, refidx }) => {
    const { collects } = tab;
    return (
      <ul className={s.megaProductCollectList}>
        {collects &&
          collects.map((item, idx) => {
            return (
              <li
                className={s.metaProductCollectItem}
                key={idx}
                onClick={() => {
                  setCurrentSubChild(index);
                  setCurrentLastChild(idx);
                  setTitle(item.title);
                  setDescription(item.description);
                  setImg(item.img);
                  setHref(item.href);
                  setAllLabel(item?.all?.label);
                  setAllHref(item?.all?.href);
                  setMoreLabel(item?.more?.label);
                  setMoreHref(item?.more?.href);
                  setIsEditCollect(true);
                }}
              >
                <a
                  href={handleMenuUrl(
                    item.href,
                    false,
                    "ref",
                    `navimenu_${current + 1}_${refidx}_${idx + 1}_img`
                  )}
                >
                  <Image
                    className={s.megaProductCollectImg}
                    loading="lazy"
                    src={item.img}
                    alt={item.title}
                    width={130}
                    height={84}
                  />
                </a>
                <div className={s.megaProductCollectInfo}>
                  <a
                    href={handleMenuUrl(
                      item.href,
                      false,
                      "ref",
                      `navimenu_${current + 1}_${refidx}_${idx + 1}_copy`
                    )}
                  >
                    <p className={s.megaProductCollectTitle}>{item.title}</p>
                  </a>
                  <p className={s.megaProductCollectDescription}>
                    {item.description}
                  </p>
                </div>
                <div className={s.megaProductCollectFeature}>
                  <p>{shopCommon.feature_products}</p>
                  {item.products &&
                    item.products.map((product, i) => (
                      <a
                        key={i}
                        href={handleMenuUrl(
                          product.href,
                          false,
                          "ref",
                          `navimenu_${current + 1}_${refidx}_${idx + 1}_${
                            i + 1
                          }_copy`
                        )}
                        onClick={(e) => {
                          setLabel(product.label);
                          setHref(product.href);
                          setCurrentSubChild(index);
                          setCurrentLastChild(idx);
                          setCurrentProductIndex(i);
                          setIsEditCollectProduct(true);
                          e.preventDefault();
                          e.stopPropagation();
                        }}
                      >
                        {product.label}
                      </a>
                    ))}
                  <a className={s.itemAdd}>
                    <Button
                      // plain
                      // monochrome
                      icon={CirclePlusMinor}
                      onClick={(e) => {
                        setLabel();
                        setHref();
                        setCurrentSubChild(index);
                        setCurrentLastChild(idx);
                        setCurrentProductIndex(item.products?.length || 0);
                        e.stopPropagation();
                        setIsEditCollectProduct(true);
                      }}
                    >
                      Add Product
                    </Button>
                  </a>
                </div>
                <div className={s.megaProductCollectMore}>
                  {item.all && (
                    <a
                      href={handleMenuUrl(
                        item.all?.href,
                        false,
                        "ref",
                        `navimenu_${current + 1}_${refidx}_${idx + 1}_copy`
                      )}
                    >
                      {item.all?.label}
                    </a>
                  )}
                  {item.more && (
                    <a
                      href={handleMenuUrl(
                        item.more?.href,
                        false,
                        "ref",
                        `navimenu_${current + 1}_${refidx}_${idx + 1}_copy`
                      )}
                    >
                      {item.more?.label}
                    </a>
                  )}
                </div>
              </li>
            );
          })}
        <li
          className={classNames(
            s.metaProductCollectItem,
            s.metaProductCollectItemAdd
          )}
        >
          <Button
            // plain
            // monochrome
            icon={CirclePlusMinor}
            onClick={() => {
              setCurrentSubChild(index);
              setCurrentLastChild(collects?.length || 0);
              setTitle();
              setDescription();
              setImg();
              setHref();
              setAllLabel();
              setAllHref();
              setMoreLabel();
              setMoreHref();
              setIsEditCollect(true);
            }}
          >
            Add
          </Button>
        </li>
      </ul>
    );
  };

  const MegaWrapper = ({ item, current, index }) => {
    const { type, mode, tabs, links, group, more } = item;
    return (
      <>
        <div
          className={`${s.megaWrapper} ${current == index ? s.actived : ""}`}
        >
          <i className={s.megaMask} onMouseEnter={() => handleHideMega()}></i>
          <div className={s.megaContent}>
            <div
              className={`${mode == "small" ? "" : s.fullWidth} ${
                s.megaContentInner
              }`}
            >
              {type == "tab" && (
                <>
                  <aside className={s.megaTabSide}>
                    <div className={s.sideArea}>
                      <ol className={s.megaTabList}>
                        {tabs &&
                          tabs.map((tab, idx) => {
                            return (
                              <li
                                className={`${s.megaTabItem} ${
                                  idx === currentChild ? s.actived : ""
                                }`}
                                key={idx}
                                onClick={() => {
                                  setLabel(tab.label);
                                  setIsEditLabel(true);
                                }}
                              >
                                <span
                                  onMouseEnter={() => {
                                    setCurrentChild(idx);
                                    setCurrentSubTab(0);
                                  }}
                                >
                                  {tab.label}
                                </span>
                              </li>
                            );
                          })}
                      </ol>
                    </div>
                    {links && links.length && (
                      <div className={s.megaTabLinks}>
                        {links.map((link, idx) => {
                          return (
                            <a
                              className={s.megaTabLink}
                              key={idx}
                              href={handleMenuUrl(
                                link.href,
                                false,
                                "ref",
                                `navimenu_${index + 1}_${
                                  tabs?.length + idx + 1
                                }_copy`
                              )}
                            >
                              {link.label}
                            </a>
                          );
                        })}
                      </div>
                    )}
                  </aside>
                  <div
                    className={`${s.megaTabContent} ${
                      s[`megaTab${mode || "normal"}Content`]
                    }`}
                  >
                    {tabs?.map((tab, idx) => {
                      return (
                        <div
                          key={idx}
                          className={`${s.megaTabContentItem} ${
                            currentChild == idx ? s.actived : ""
                          }`}
                        >
                          <div className={s.megaProductCollect}>
                            <MegaCollectContain
                              tab={tab}
                              index={0}
                              refidx={idx + 1}
                            />
                          </div>
                          <div className={s.megaSubtabContain}>
                            <ul className={s.megaSubtabList}>
                              {tab.tabs &&
                                tab.tabs.map((subtab, subidx) => {
                                  return (
                                    <li
                                      key={subidx}
                                      className={`${s.megaSubTabItem} ${
                                        currentSubTab == subidx ? s.actived : ""
                                      }`}
                                      onMouseEnter={() => {
                                        setCurrentSubTab(subidx);
                                      }}
                                    >
                                      {subtab.label}
                                    </li>
                                  );
                                })}
                            </ul>
                          </div>
                          {tab.list && (
                            <MegaProductContain
                              tab={tab}
                              index={0}
                              seeMore={more}
                              refidx={idx + 1}
                            />
                          )}
                          {tab.tabs &&
                            tab.tabs.map((subtab, subidx) => {
                              return (
                                <MegaProductContain
                                  key={subidx}
                                  tab={subtab}
                                  seeMore={tab.more}
                                  index={subidx}
                                  refidx={`${idx + 1}_${subidx + 1}`}
                                />
                              );
                            })}
                        </div>
                      );
                    })}
                  </div>
                </>
              )}
              {type == "links" && (
                <>
                  <div className={s.megaLinksContent}>
                    {group &&
                      group.map((gp, idx) => {
                        return (
                          <div key={idx} className={s.megaLinksGroup}>
                            <p className={s.megaGroupTitle}>{gp.label}</p>
                            {gp.links &&
                              gp.links.map((link, lidx) => {
                                return (
                                  <a
                                    key={lidx}
                                    className={s.megaGroupLink}
                                    href={handleMenuUrl(
                                      link.href,
                                      false,
                                      "ref",
                                      `navimenu_${index + 1}_${idx + 1}_${
                                        lidx + 1
                                      }_copy`
                                    )}
                                  >
                                    {link.label}
                                  </a>
                                );
                              })}
                          </div>
                        );
                      })}
                  </div>
                </>
              )}
              {type == "deals" && (
                <div className="flex w-full justify-center gap-x-4">
                  {links &&
                    links.map((link, idx) => {
                      return (
                        <div key={idx} className={s.megaDealsItem}>
                          <div className={s.megaDealsImgWrap}>
                            <Picture
                              className={classNames({
                                [s.megaDealsImg]: links.length > 1,
                                [s.megaDealsFullImg]: links.length === 1,
                              })}
                              source={
                                links.length > 1 ? link.img : link.img_full
                              }
                            ></Picture>
                          </div>
                          <div
                            className={classNames(s.megaDealsInfoWrap, {
                              [s.megaDealsFullInfo]: links.length === 1,
                            })}
                          >
                            <a
                              className={s.navBarFullLink}
                              href={handleMenuUrl(
                                link.href,
                                false,
                                "ref",
                                `navimenu_${index + 1}_1_${idx + 1}_copy`
                              )}
                            ></a>
                            <p className={s.dealsTitle}>{link.title}</p>
                            <a
                              className={s.linkBtn}
                              href={handleMenuUrl(
                                link.href,
                                false,
                                "ref",
                                `navimenu_${index + 1}_1_${idx + 1}_copy`
                              )}
                            >
                              {shopCommon.learn_more}
                            </a>
                          </div>
                        </div>
                      );
                    })}
                </div>
              )}
            </div>
          </div>
        </div>
      </>
    );
  };

  const LivePart = () => {
    return (
      headerSetting &&
      headerSetting.map((item, index) => {
        const url = handleMenuUrl(
          item.href,
          false,
          "ref",
          `navimenu_${index + 1}_copy`
        );

        if (item.type == "live") {
          const { durations } = item;
          const { list = [] } = livestream;
          if (list.length) {
            list.map((item) => {
              const s = item.reminder_start;
              const e = item.reminder_end;
              const now = new Date().getTime();
              const startTime = icsDate2jsDate(s);
              const endTime = icsDate2jsDate(e);
              if (
                (now >= startTime && !e) ||
                (now >= startTime && now <= endTime)
              ) {
                setLived(true);
              }
            });
          } else {
            durations &&
              durations.map(({ start, end }) => {
                if (start) {
                  const s = start.replace(/-/g, "/");
                  const e = end.replace(/-/g, "/");
                  const now = new Date().getTime();
                  const startTime = new Date(s).getTime();
                  const endTime = new Date(e).getTime();
                  if (
                    (now >= startTime && !e) ||
                    (now >= startTime && now <= endTime)
                  ) {
                    setLived(true);
                  }
                }
              });
          }
        }
        return (
          item.type == "live" && (
            <div
              className={classNames(s.livePart, {
                [s["actived"]]: lived,
              })}
              alt={item.label}
              key={index}
            >
              <a href={url}>
                <span className={s.liveIcon}>
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 28 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M4.5 4.75C2.98122 4.75 1.75 5.98122 1.75 7.5V20.5C1.75 22.0188 2.98122 23.25 4.5 23.25H13.5C13.9142 23.25 14.25 22.9142 14.25 22.5C14.25 22.0858 13.9142 21.75 13.5 21.75H4.5C3.80964 21.75 3.25 21.1904 3.25 20.5V7.5C3.25 6.80964 3.80964 6.25 4.5 6.25H17.5C18.1904 6.25 18.75 6.80964 18.75 7.5V20.5C18.75 21.1904 18.1904 21.75 17.5 21.75H17C16.5858 21.75 16.25 22.0858 16.25 22.5C16.25 22.9142 16.5858 23.25 17 23.25H17.5C19.0188 23.25 20.25 22.0188 20.25 20.5V18.5092L22.9284 19.96C24.4275 20.772 26.25 19.6866 26.25 17.9816V10.0184C26.25 8.31344 24.4275 7.22796 22.9284 8.04001L20.25 9.49079V7.5C20.25 5.98122 19.0188 4.75 17.5 4.75H4.5ZM20.25 11.1967V16.8033L23.6428 18.6411C24.1425 18.9117 24.75 18.5499 24.75 17.9816V10.0184C24.75 9.45009 24.1425 9.08826 23.6428 9.35895L20.25 11.1967ZM7.25 12.75C7.66421 12.75 8 13.0858 8 13.5V18.5C8 18.9142 7.66421 19.25 7.25 19.25C6.83579 19.25 6.5 18.9142 6.5 18.5V13.5C6.5 13.0858 6.83579 12.75 7.25 12.75Z"
                      fill="#333333"
                    />
                  </svg>
                </span>
                <span className={s.liveIcon}>
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 28 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M4 5C2.89543 5 2 5.89543 2 7V21C2 22.1046 2.89543 23 4 23H18C19.1046 23 20 22.1046 20 21V17.7694L23.7889 19.8095C24.7882 20.3476 26 19.6238 26 18.4888V9.51148C26 8.37647 24.7882 7.65267 23.7889 8.19078L20 10.2309V7C20 5.89543 19.1046 5 18 5H4Z"
                      fill="#F84D4F"
                    />
                  </svg>
                  <i className={classNames(s.lineV, s.lineV1)}></i>
                  <i className={classNames(s.lineV, s.lineV2)}></i>
                  <i className={classNames(s.lineV, s.lineV3)}></i>
                </span>
              </a>
            </div>
          )
        );
      })
    );
  };

  const HeaderPc = () => {
    return (
      <div className={classNames(s.fullWidth, s.headerPc)}>
        {/* <LivePart /> */}
        <div className="flex">
          <a
            className={s.headerLogo}
            href={`${handleMenuUrl("/")}?ref=logo`}
            title={`${BRAND} ${locale}`}
            onClick={(e) => {
              document
                .getElementById("headerV3")
                .classList.toggle("header-v3-ab-add");
              e.preventDefault();
            }}
          >
            <Logo />
          </a>
        </div>
        <div className="flex flex-1">
          <nav className={s.mainNav}>
            <ul className="flex">
              {headerSetting &&
                headerSetting.map((item, index) => {
                  return (
                    item.type != "links" &&
                    item.type != "live" &&
                    item.pcHide != true && (
                      <MainNavLink key={index} item={item} index={index} />
                    )
                  );
                })}
            </ul>
            <ul className="flex">
              {headerSetting &&
                headerSetting.map((item, index) => {
                  return (
                    item.type == "links" &&
                    item.pcHide != true && (
                      <MainNavLink key={index} item={item} index={index} />
                    )
                  );
                })}
            </ul>
          </nav>
        </div>
        <div className="flex">
          <div className={s.headerMenuIconWrap}>
            <div
              className={s.headerMenuIcon}
              onClick={() => {
                // showSearch ? setShowSearch(false) : setShowSearch(true);
              }}
            >
              {/* <Icon source={SearchMajor} tone="base" /> */}
            </div>
            <div className={`${s.megaWrapper} ${showSearch ? s.actived : ""}`}>
              <i
                className={s.megaMask}
                onClick={() => setShowSearch(false)}
              ></i>
              <div className={s.megaContent}>
                <div className={`flex justify-center ${s.fullWidth}`}>
                  <div className={s.megaSearchWrap}>
                    <p className={s.megaSearchTitle}>
                      {shopCommon?.["search_title"]}
                    </p>
                    <input
                      className={s.megaSearchInput}
                      type="text"
                      placeholder={shopCommon?.["search_placeholder"]}
                      onKeyUp={(e) => {
                        e.which == "13" && handleSearch(e.target.value);
                      }}
                    ></input>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={`${s.headerMenuIcon} ${s.headerUserIcon}`}>
            {false && (
              <a
                href={`${MULPASS_URL}/account/?app=${I18N_STORE_DOMAIN[locale]
                  .split(".")
                  .shift()}`}
                aria-label="account"
              ></a>
            )}
            {/* <Icon source={CustomersMajor} tone="base" /> */}
            {!true && (
              <div className={s.customerDropMenuList}>
                <div className={s.customerDropMenuListInner}>
                  <div className={s.customerDropMenuItem}>
                    <a
                      className={s.customerDropMenuLink}
                      href={handleMenuUrl(
                        `${MULPASS_URL}/?app=${I18N_STORE_DOMAIN[locale]
                          .split(".")
                          .shift()}`,
                        false,
                        "ref",
                        `navimenu_${headerSetting?.length + 1}_copy`
                      )}
                      aria-label={userCenterSetting?.["signIn"]}
                    >
                      {userCenterSetting?.["signIn"]}
                    </a>
                    <span className={s.customerDropMenuLine}>/</span>
                    <a
                      className={s.customerDropMenuLink}
                      href={handleMenuUrl(
                        `${MULPASS_URL}/?app=${I18N_STORE_DOMAIN[locale]
                          .split(".")
                          .shift()}&tab=register`,
                        false,
                        "ref",
                        `navimenu_${headerSetting?.length + 2}_copy`
                      )}
                      aria-label={userCenterSetting?.["signUp"]}
                    >
                      {userCenterSetting?.["signUp"]}
                    </a>
                  </div>
                  <div className={s.customerDropMenuItem}>
                    <a
                      className={s.customerDropMenuLink}
                      href={handleMenuUrl(
                        userCenterSetting?.["orderTrackHref"],
                        false,
                        "ref",
                        `navimenu_${headerSetting?.length + 3}_copy`
                      )}
                    >
                      {userCenterSetting?.["orderTrack"]}
                    </a>
                  </div>
                  {userCenterSetting?.["get$40"] && (
                    <div className={s.customerDropMenuItem}>
                      <a
                        className={s.customerDropMenuLink}
                        onClick={handleReferralTrack}
                        href={handleMenuUrl(
                          userCenterSetting?.["referralHref"],
                          false,
                          "ref",
                          `navimenu_${headerSetting?.length + 4}_copy`
                        )}
                      >
                        {userCenterSetting?.["get$40"]}
                      </a>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
          <div className={s.headerMenuIcon}>
            {BRAND && (
              <>
                {CART && (
                  <>
                    {
                      <Button
                        className={classNames(s.item, {
                          [s.iconLight]: menuTheme,
                        })}
                        variant="naked"
                        onClick={() => {
                          setSidebarView("CART_VIEW");
                          toggleSidebar();
                        }}
                        aria-label={`Cart items: ${itemsCount}`}
                      >
                        {/* <Icon source={CartMajor} tone="base" /> */}
                        {itemsCount > 0 && (
                          <span className={s.bagCount}>{itemsCount}</span>
                        )}
                      </Button>
                    }
                  </>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      {loading && (
        <div className="loading">
          <Spinner accessibilityLabel="Spinner example" size="large" />
        </div>
      )}
      <header
        className={classNames(s.headerV3, "header-v3-ab-new")}
        id="headerV3"
      >
        <HeaderPc />
        <Button
          type="primary"
          onClick={() => setInputBox(true)}
          className="absolute top-1/2 right-4 -mt-4"
        >
          metafield
        </Button>
        <Modal
          title="link"
          open={isEditLink}
          onClose={() => setIsEditLink(false)}
          primaryAction={{
            content: "确定",
            onAction: () => {
              let _headerSetting = cloneDeep(headerSetting);
              _headerSetting[current].label = label;
              _headerSetting[current].href = href;
              updateMenus(_headerSetting, () => {
                setIsEditLink(false);
              });
            },
          }}
        >
          <Form>
            <FormLayout>
              <TextField
                label="label"
                value={label}
                onChange={(value) => setLabel(value)}
              />
              <TextField
                label="href"
                value={href}
                onChange={(value) => setHref(value)}
              />
            </FormLayout>
          </Form>
        </Modal>

        <Modal
          title="tabLabel"
          open={isEditLabel}
          onClose={() => setIsEditLabel(false)}
          primaryAction={{
            content: "确定",
            onAction: () => {
              let _headerSetting = cloneDeep(headerSetting);
              let item = _headerSetting[current].tabs[currentChild];
              item.label = label;
              updateMenus(_headerSetting, () => {
                setIsEditLabel(false);
              });
            },
          }}
        >
          <Form>
            <FormLayout>
              <TextField
                label="label"
                value={label}
                onChange={(value) => setLabel(value)}
              />
            </FormLayout>
          </Form>
        </Modal>

        <Modal
          title="tab"
          open={isEditTab}
          onClose={() => setIsEditTab(false)}
          primaryAction={{
            content: "确定",
            onAction: () => {
              let _headerSetting = cloneDeep(headerSetting);
              let parent = _headerSetting[current].tabs[currentChild];
              let item;
              if (parent.list) {
                if (!parent.list[currentLastChild]) {
                  parent.list[currentLastChild] = {};
                }
                item = parent.list[currentLastChild];
              }
              if (parent.tabs) {
                if (!parent.tabs[currentSubChild].list[currentLastChild]) {
                  parent.tabs[currentSubChild].list[currentLastChild] = {};
                }
                item = parent.tabs[currentSubChild].list[currentLastChild];
              }
              item.sku = sku;
              item.title = title;
              item.tag = tag;
              item.img = img;
              item.href = href;
              delete item.label;
              updateMenus(_headerSetting, () => {
                setIsEditTab(false);
              });
            },
          }}
          secondaryActions={{
            content: "删除",
            destructive: true,
            onAction: () => {
              let _headerSetting = cloneDeep(headerSetting);
              let parent = _headerSetting[current].tabs[currentChild];
              if (parent.list) {
                if (!parent.list[currentLastChild]) {
                  setIsEditTab(false);
                  return;
                }
                parent.list.splice(currentLastChild, 1);
              }
              if (parent.tabs) {
                if (!parent.tabs[currentSubChild].list[currentLastChild]) {
                  setIsEditTab(false);
                  return;
                }
                parent.tabs[currentSubChild].list.splice(currentLastChild, 1);
              }
              updateMenus(_headerSetting, () => {
                setIsEditTab(false);
              });
            },
          }}
        >
          <Form>
            <FormLayout>
              <TextField
                label="sku"
                value={sku}
                placeholder="非必填,但sku和href不能同时为空"
                onChange={(value) => setSku(value)}
              />
              <TextField
                label="title"
                value={title}
                onChange={(value) => setTitle(value)}
              />
              <TextField
                label="tag"
                value={tag}
                onChange={(value) => setTag(value)}
              />
              <TextField
                label="href"
                value={href}
                placeholder="非必填,但sku和href不能同时为空"
                onChange={(value) => setHref(value)}
              />
              <TextField
                label="img"
                value={img}
                onChange={(value) => setImg(value)}
              />
            </FormLayout>
          </Form>
        </Modal>

        <Modal
          title="collect"
          open={isEditCollect}
          onClose={() => setIsEditCollect(false)}
          primaryAction={{
            content: "确定",
            onAction: () => {
              let _headerSetting = cloneDeep(headerSetting);
              let parent = _headerSetting[current].tabs[currentChild];
              if (!parent.collects) {
                parent.collects = [];
              }
              if (!parent.collects[currentLastChild]) {
                parent.collects[currentLastChild] = {};
              }
              let item = parent.collects[currentLastChild];
              item.title = title;
              item.description = description;
              item.img = img;
              item.href = href;
              if (!item.all) {
                item.all = {};
              }
              item.all.label = allLabel;
              item.all.href = allHref;
              if (!item.more) {
                item.more = {};
              }
              item.more.label = moreLabel;
              item.more.href = moreHref;
              updateMenus(_headerSetting, () => {
                setIsEditCollect(false);
              });
            },
          }}
          secondaryActions={{
            content: "删除",
            destructive: true,
            onAction: () => {
              let _headerSetting = cloneDeep(headerSetting);
              let parent = _headerSetting[current].tabs[currentChild];
              if (!parent.collects[currentLastChild]) {
                setIsEditCollect(false);
                return;
              }
              parent.collects.splice(currentLastChild, 1);
              updateMenus(_headerSetting, () => {
                setIsEditCollect(false);
              });
            },
          }}
        >
          <Form>
            <FormLayout>
              <TextField
                label="title"
                value={title}
                onChange={(value) => setTitle(value)}
              />
              <TextField
                label="description"
                value={description}
                onChange={(value) => setDescription(value)}
              />
              <TextField
                label="img"
                value={img}
                onChange={(value) => setImg(value)}
              />
              <TextField
                label="href"
                value={href}
                onChange={(value) => setHref(value)}
              />
              <TextField
                label="allLabel"
                value={allLabel}
                onChange={(value) => setAllLabel(value)}
              />
              <TextField
                label="allHref"
                value={allHref}
                onChange={(value) => setAllHref(value)}
              />
              <TextField
                label="moreLabel"
                value={moreLabel}
                onChange={(value) => setMoreLabel(value)}
              />
              <TextField
                label="moreHref"
                value={moreHref}
                onChange={(value) => setMoreHref(value)}
              />
            </FormLayout>
          </Form>
        </Modal>

        <Modal
          title="product"
          open={isEditCollectProduct}
          onClose={() => setIsEditCollectProduct(false)}
          primaryAction={{
            content: "确定",
            onAction: () => {
              let _headerSetting = cloneDeep(headerSetting);
              let parent = _headerSetting[current].tabs[currentChild];
              if (!parent.collects[currentLastChild].products) {
                parent.collects[currentLastChild].products = [];
              }
              if (
                !parent.collects[currentLastChild].products[currentProductIndex]
              ) {
                parent.collects[currentLastChild].products[
                  currentProductIndex
                ] = {};
              }
              let item =
                parent.collects[currentLastChild].products[currentProductIndex];
              item.label = label;
              item.href = href;
              updateMenus(_headerSetting, () => {
                setIsEditCollectProduct(false);
              });
            },
          }}
          secondaryActions={{
            content: "删除",
            destructive: true,
            onAction: () => {
              let _headerSetting = cloneDeep(headerSetting);
              let parent = _headerSetting[current].tabs[currentChild];
              if (!parent.collects[currentLastChild].products) {
                parent.collects[currentLastChild].setIsEditCollectProduct(
                  false
                );
                return;
              }
              if (
                !parent.collects[currentLastChild].products[currentProductIndex]
              ) {
                setIsEditCollectProduct(false);
                return;
              }
              parent.collects[currentLastChild].products.splice(
                currentProductIndex,
                1
              );
              updateMenus(_headerSetting, () => {
                setIsEditCollectProduct(false);
              });
            },
          }}
        >
          <Form>
            <FormLayout>
              <TextField
                label="label"
                value={label}
                onChange={(value) => setLabel(value)}
              />
              <TextField
                label="href"
                value={href}
                onChange={(value) => setHref(value)}
              />
            </FormLayout>
          </Form>
        </Modal>

        <Modal
          title="sublink"
          open={isSubEditLink}
          onClose={() => setIsSubEditLink(false)}
          primaryAction={{
            content: "确定",
            onAction: () => {
              let _headerSetting = cloneDeep(headerSetting);
              _headerSetting[index].links[subIndex].label = label;
              _headerSetting[index].links[subIndex].href = href;
              updateMenus(_headerSetting, () => {
                setIsSubEditLink(false);
              });
            },
          }}
        >
          <Form>
            <FormLayout>
              <TextField
                label="label"
                value={label}
                onChange={(value) => setLabel(value)}
              />
              <TextField
                label="href"
                value={href}
                onChange={(value) => setHref(value)}
              />
            </FormLayout>
          </Form>
        </Modal>

        <Modal
          title="morelink"
          open={isEditLinkMore}
          onClose={() => setIsEditLinkMore(false)}
          primaryAction={{
            content: "确定",
            onAction: () => {
              let _headerSetting = cloneDeep(headerSetting);
              let item =
                _headerSetting[current].tabs[currentChild].links[index];
              item.label = label;
              item.href = href;
              updateMenus(_headerSetting, () => {
                setIsEditLinkMore(false);
              });
            },
          }}
        >
          <Form>
            <FormLayout>
              <TextField
                label="label"
                value={label}
                onChange={(value) => setLabel(value)}
              />
              <TextField
                label="href"
                value={href}
                onChange={(value) => setHref(value)}
              />
            </FormLayout>
          </Form>
        </Modal>

        <Modal
          title="more"
          open={isEditMore}
          onClose={() => setIsEditMore(false)}
          primaryAction={{
            content: "确定",
            onAction: () => {
              let _headerSetting = cloneDeep(headerSetting);
              let item = _headerSetting[current].tabs[index];
              item.more = more;
              updateMenus(_headerSetting, () => {
                setIsEditMore(false);
              });
            },
          }}
        >
          <Form>
            <FormLayout>
              <TextField
                label="more"
                value={more}
                onChange={(value) => setMore(value)}
              />
            </FormLayout>
          </Form>
        </Modal>
      </header>
      <Modal open={inputBox} onClose={() => setInputBox(false)}>
        <textarea
          onChange={(e) => setTextarea(e.target.value)}
          value={textarea}
          className="text-black block w-full h-[65vh] border border-black p-2"
        ></textarea>
        <div className="text-center mt-4">
          <Button type="primary" onClick={() => {
            setMetafield();
            setInputBox(false);
          }}>
            确定
          </Button>
        </div>
      </Modal>
    </>
  );
};

export default Navbar;
