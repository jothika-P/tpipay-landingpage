import glob
import re

marquee_html = '''  <div class="top-marquee-container">
    <div class="top-marquee-text">PCI DSS Certified – Trusted Security for Payment Data Protection</div>
  </div>'''

for file in glob.glob("*.html"):
    with open(file, "r", encoding="utf-8") as f:
        content = f.read()
    
    if "top-marquee-container" in content:
        continue
    
    new_content = re.sub(
        r'(<header[^>]*>)',
        r'\1\n' + marquee_html,
        content
    )
    
    with open(file, "w", encoding="utf-8") as f:
        f.write(new_content)

print("Updated HTML files.")
