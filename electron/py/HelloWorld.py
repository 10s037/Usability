import time
import sys
import json
from helpers import webHelper


def main():
    driver = webHelper.initiate_driver()
    # driver = None
    address = read_in()
    url = 'https://' + address
    if driver:
        try:
            driver.get(url)
            time.sleep(10)

            ## Save source
            # html = driver.page_source
            # print(webHelper.save_source(address, html))

            ## check Element fonts
            # webHelper.get_element_fonts(driver, "*")

            ## check Element inner html (incomplete)
            # webHelper.get_inner_html(driver)

            ## Check consistent use of color
            # webHelper.get_element_colors(driver)

        finally:
            driver.quit()


def read_in():
    lines = sys.stdin.readlines()
    return json.loads(lines[0])


#this should start the whole process of the code
if __name__ == '__main__':
    main()
