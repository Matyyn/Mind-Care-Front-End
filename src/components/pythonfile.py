
from ironpdf import *

# Load existing PDF document
pdf = PdfDocument.FromFile("src\components\sample.pdf")

# Extract text from PDF document
all_text = pdf.ExtractAllText()
print(all_text)
